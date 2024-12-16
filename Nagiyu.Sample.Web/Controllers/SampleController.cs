using Microsoft.AspNetCore.Mvc;

namespace Nagiyu.Sample.Web.Controllers
{
    public class SampleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
