#include <stdio.h>
#include <string.h>
#include <netdb.h> //gethostbyname, struct hostent
#include <unistd.h> //write, read
#include <stdlib.h> //exit

const char * welcome =
"Welcome to the Cyb3rsoc secure (tm) file system!\nAvailable files:\n====================";

char * host = "cybersoc.co.uk";
char * path = "secrets/Sup3r-secr3t_CyBers0c_f1le5tor3/request";
char * get_request = "GET /%s HTTP/1.1\r\nHost: %s\r\nContent-Type: text/plain\r\n\r\n";

void build_request (char * request, char * host, char * resource)
{
	/* Builds a HTTP GET request and stores in char * request. */
    sprintf(request, get_request, resource, host);
}

void list_files_request (char * request)
{
	/* Builds a request to list files and stores in char * request */
	build_request(request, host, path);
}

void get_file_request (char * request, char * file, char * user, char * pass)
{
	/* Builds a request to get the file and stores in char * request */
    char resource[100];
    char arguments[100];

    // Build the resource string
    sprintf(arguments, "?file=%s&user=%s&pass=%s", file, user, pass);
    strcpy(resource, path);
    strcat(resource, arguments);

    // Build the full GET request
    build_request(request, host, resource);
}

void fatal (char * message)
{
    /* Prints error and exits. */
    printf("%s\n", message);
    exit(1);
}

void error (char * message)
{
    /*
    Prints the given error and the most recent error from a library, then exits.
    */
    perror(message);
    exit(1);
}

#define SIZE 16384

void http_request (char * request, char * response)
{
    /*
    Makes the given HTTP request and returns the response in the
    provided buffer.
    */
    int sock, connection, bytes;
    unsigned char * base;
    struct hostent * host;
    struct sockaddr_in address;
    short port;

    host = gethostbyname("cybersoc.co.uk");
    if (!host) fatal("Failed to resolve hostname\n");

    sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (sock < 0) error("Failed to obtain socket");

    port = htons(80);   // Convert short port from host to network byte order
    address.sin_port = port;
    address.sin_family = AF_INET;
    memcpy(&address.sin_addr.s_addr, host->h_addr, host->h_length);

    connection = connect(sock, (struct sockaddr *) &address, sizeof(address));
    if (connection < 0) error("Failed to connect to host");
    write(sock, request, strlen(request));
    bytes = read(sock, response, SIZE);
    if (bytes < 1) fatal("Did not receive anything from server");

	close(sock);

	// Zero out the rest of the buffer
	memset(response + bytes, 0, SIZE - bytes);
}

char * print_body (char * http)
{
	/* Find and print the body of a HTTP response */
	int i = 0;

	// Seek forward to find the "\r\n\r\n"
	while (http[i] != '\r' || http[i+1] != '\n' || http[i+2] != '\r' || http[i+3] != '\n')
	{
		i = i + 1;
	}
	http = http + i + 4;
	printf("%s\n", http);
}

void list_files (void)
{
	/* Lists files in the filesystem */
	char request[512];
	char response[SIZE];
	list_files_request(request);
	http_request(request, response);
	print_body(response);
}

void get_file (char * file, char * user, char * pass)
{
	/* Get a specific file from the filesystem */
	char request[512];
	char response[SIZE];
	get_file_request(request, file, user, pass);
	http_request(request, response);
	print_body(response);
	puts("\n");
}

void decrypt(char * output, char * input)
{
	/* Decrypts an input and stores in output */
	int length = strlen(input);
	memset(output, 0, 50);
	for (int i = 0; i < length; i++)
	{
		output[i] = input[i] ^ 7;
	}
}

void set_master_credentials(char * user, char * pass)
{
	/* Sets the credentials to that of the master user
	TODO: Remove legacy function, as creds should not be stored in binary */
	decrypt(user, "jftsbu");
	decrypt(pass, "D~e4uthdntFpb27jb");
}

void set_test_credentials(char * user, char * pass)
{
	/* Sets the credentials to that of the test user */
	decrypt(user, "sbts");
	decrypt(pass, "Wfttphuc654");
}

void strip_newlines(char * message)
{
	/* Replaces all newlines with null bytes */
	int length = strlen(message);
	for (int i = 0; i < length; i++)
	{
		if (message[i] == '\n' || message[i] == '\r')
		{
			message[i] = 0;
		}
	}
}

int main (void)
{
	char filename[50];
	char user[50];
	char pass[50];

	puts(welcome);
	list_files();

	set_test_credentials(user, pass);

	printf("You are logged in as %s.\n", user);
	puts("Your securely stored password will automatically be used to authenticate.\n");
	while (1)
	{
		printf("What file would you like to view? ");
		fgets(filename, 50, stdin);
		strip_newlines(filename);
		puts("====================");
		get_file(filename, user, pass);
	}


	return 0;
}
