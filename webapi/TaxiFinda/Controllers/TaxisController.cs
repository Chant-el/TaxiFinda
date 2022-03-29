using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using TaxiFinda.Data;

namespace TaxiFinda.Controllers
{
    public class TaxisController : ApiController
    {
        private TaxiFindaDBEntities db = new TaxiFindaDBEntities();

        // GET: api/Taxis
        public IQueryable<Taxi> GetTaxis()
        {

            return db.Taxis;
      
        }

        // GET: api/Taxis/5
        [ResponseType(typeof(Taxi))]
        public async Task<IHttpActionResult> GetTaxi(Guid id)
        {
            Taxi taxi = await db.Taxis.FindAsync(id);
            if (taxi == null)
            {
                return NotFound();
            }

            return Ok(taxi);
        }

        //GET: api/Taxis/destination/x
        [Route("destination/{destination}")]
        [HttpGet]
        public IQueryable<Taxi> GetTaxiTo(string destination)
        {
            return db.Taxis.Where(r => r.destination == destination);
        }

        // PUT: api/Taxis/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTaxi(Guid id, Taxi taxi)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taxi.id)
            {
                return BadRequest();
            }

            db.Entry(taxi).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Taxis
        [ResponseType(typeof(Taxi))]
        public async Task<IHttpActionResult> PostTaxi([FromBody] Taxi taxi)
        {
            //TODO create own validation
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            db.Taxis.Add(taxi);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TaxiExists(taxi.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = taxi.id }, taxi);
        }

        // DELETE: api/Taxis/5
        [ResponseType(typeof(Taxi))]
        public async Task<IHttpActionResult> DeleteTaxi(Guid id)
        {
            Taxi taxi = await db.Taxis.FindAsync(id);
            if (taxi == null)
            {
                return NotFound();
            }

            db.Taxis.Remove(taxi);
            await db.SaveChangesAsync();

            return Ok(taxi);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaxiExists(Guid id)
        {
            return db.Taxis.Count(e => e.id == id) > 0;
        }
    }
}