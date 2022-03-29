using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Threading.Tasks;
using TaxiFinda.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TaxiFinda.Controllers
{
    public class DestinationController : ApiController
    {
        TaxiFindaDBEntities db = new TaxiFindaDBEntities();

        //GET: api/Destination/{destination}
        [Route("api/destination/{anyString}")]
        [HttpGet]
        public IQueryable<Taxi> GetTaxisToDestination(string destination)
        {
            return db.Taxis.Where(r => r.destination == destination);
        }
    }
}
