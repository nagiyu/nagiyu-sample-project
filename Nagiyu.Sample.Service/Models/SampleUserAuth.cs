using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.Model;
using Nagiyu.Common.Auth.Service.Models;
using System.Collections.Generic;

namespace Nagiyu.Sample.Service.Models
{
    public class SampleUserAuth : UserAuthBase
    {
        [DynamoDBProperty]
        public string SampleRole { get; set; }

        public SampleUserAuth()
        {
        }

        public SampleUserAuth(Dictionary<string, AttributeValue> keyValuePairs)
        {
            if (keyValuePairs.TryGetValue(nameof(SampleRole), out var sampleRole))
            {
                SampleRole = sampleRole.S;
            }
            else
            {
                SampleRole = string.Empty;
            }
        }
    }
}
