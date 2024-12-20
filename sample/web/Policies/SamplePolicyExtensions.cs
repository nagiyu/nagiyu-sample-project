using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Nagiyu.Common.Auth.Service.Services;
using Nagiyu.Sample.Service.Consts;
using Nagiyu.Sample.Service.Models;

namespace Nagiyu.Sample.Web.Policies
{
    public static class SamplePolicyExtensions
    {
        public static void AddSamplePolicy(this AuthorizationOptions options)
        {
            options.AddPolicy(SampleConst.SAMPLE_POLICY, policy =>
                policy.RequireAssertion(async context =>
                {
                    if (context.Resource is not HttpContext httpContext)
                    {
                        return false;
                    }

                    var authService = httpContext.RequestServices.GetRequiredService<AuthService>();

                    var user = await authService.GetUser<SampleUserAuth>();

                    return user?.SampleRole == SampleConst.SAMPLE_ROLE_ADMIN;
                })
            );
        }
    }
}
