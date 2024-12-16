using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nagiyu.Sample.Service.Consts;

namespace Nagiyu.Sample.Web.Controllers
{
    public class SampleController : Controller
    {
        [Authorize(Policy = SampleConst.SAMPLE_POLICY)]
        public IActionResult Index()
        {
            return View();
        }
    }
}
