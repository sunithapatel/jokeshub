using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace JokesHub.Api
{
    public class Program
    {
        public static async Task Main()
        {
            var host = new HostBuilder()
                .ConfigureAppConfiguration(configurationBuilder =>
                {
                    configurationBuilder.AddJsonFile("local.settings.json");
                })
                .ConfigureFunctionsWorkerDefaults()                
                .ConfigureServices(s =>
                {
                    s.AddHttpClient();
                })                
                .Build();

            await host.RunAsync();
        }
    }
}