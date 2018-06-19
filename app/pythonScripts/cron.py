from crontab import CronTab
import os
import pwd

def main():

    cron = CronTab(user=(pwd.getpwuid(os.getuid())[0]))
    job = cron.new('python3 ' +(os.path.join(os.getcwd(),'eventPuller.py' )))
    job.hour.on(12)
    job.minute.on(30)
    job.enable()
    cron.write()

if __name__ == '__main__':

    main()
