{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
    name = "cybersoc.co.uk";
    nativeBuildInputs = [ 
      pkgs.nodejs
      pkgs.nodePackages.yarn
    ];
    shellHooks = ''
      yarn install
      '';
}
