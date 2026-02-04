interface FileLogger{
  logToFile(msg:string):void
    
}

class FileLogger implements FileLogger {
  logToFile(msg: string): void {}
}




//*NetowrkLogger wants the functionality of File logger
//*Right now it is directly extending
//*use composition instead of extending

class NetworkLogger{
    private fileLog:FileLogger

    constructor(fileLog:FileLogger){
        this.fileLog = fileLog;
    }

    logToFile(msg:string){
      return this.fileLog.logToFile(msg)
    }



   
}