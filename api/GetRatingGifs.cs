using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace JokesHub.Api
{
    public class GetRatingGifs
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public GetRatingGifs(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClient = httpClientFactory.CreateClient();
            _configuration = configuration;
        }

        [Function("GetRatingGifs")]
        public async Task<HttpResponseData> RunAsync([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req, FunctionContext executionContext)
        {
            var logger = executionContext.GetLogger("GetRatingGifs");
            logger.LogInformation("GetRatingGifs function triggered.");

            var goodRatingGifResponse = await GetGifAsync("good+joke");
            var badRatingGifResponse = await GetGifAsync("thumbs+down");

            var response = req.CreateResponse(System.Net.HttpStatusCode.OK);
            await response.WriteAsJsonAsync<RatingGifsResponse>(new RatingGifsResponse
            {
                GoodRatingGif = new RatingGif
                {
                    Id = goodRatingGifResponse.Data?.Id ?? null,
                    ImageUrl = goodRatingGifResponse.Data?.Image_url ?? null
                },
                BadRatingGif = new RatingGif
                {
                    Id = badRatingGifResponse.Data?.Id ?? null,
                    ImageUrl = badRatingGifResponse.Data?.Image_url ?? null
                }
            });

            return response;
        }

        private async Task<GiphyApiRandomResponse> GetGifAsync(string searchTerm)
        {
            var giphyApiBaseUrl = _configuration["GiphyApiBaseUrl"];
            var giphyApiKey = _configuration["GiphyApiKey"];
            
            var gifResponse = await _httpClient.GetAsync($"{giphyApiBaseUrl}/gifs/random?api_key={giphyApiKey}&tag={searchTerm}&rating=g");
            var gifResponseContent = await gifResponse.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<GiphyApiRandomResponse>(
                gifResponseContent, 
                new JsonSerializerOptions 
                { 
                    PropertyNameCaseInsensitive = true 
                }
            );
        }
    }
}
