using System;
using System.IO;

using log4net;
using log4net.Repository;
using log4net.Config;

namespace back_end.Helpers
{
    public class LogHelper
    {
        private static readonly Lazy<LogHelper> lazy = new Lazy<LogHelper>(() => new LogHelper());
        private ILoggerRepository repository { get; set; }
        public static LogHelper Instance { get { return lazy.Value; } }

        private LogHelper()
        {
            repository = LogManager.CreateRepository(Consts.ApplicationConst.Log4netRepoName);
            XmlConfigurator.Configure(repository, new FileInfo(Consts.ApplicationConst.Log4netFileName));
        }

        public ILog GetLog(string typeOfName)
        {
            return LogManager.GetLogger(repository.Name,typeOfName);
        }
    }
}