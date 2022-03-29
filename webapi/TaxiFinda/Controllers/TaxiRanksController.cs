using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using TaxiFinda.Data;
using TaxiFinda.Models;

namespace TaxiFinda.Controllers
{
    public class TaxiRanksController : ApiController
    {
        private TaxiFindaDBEntities db = new TaxiFindaDBEntities();

        // GET: api/TaxiRanks
        public IQueryable<TaxiRank> GetTaxiRanks()
        {
            return db.TaxiRanks;
        }

        // GET: api/TaxiRanks/5
        [ResponseType(typeof(TaxiRank))]
        public async Task<IHttpActionResult> GetTaxiRank(Guid id)
        {
            TaxiRank taxiRank = await db.TaxiRanks.FindAsync(id);
            if (taxiRank == null)
            {
                return NotFound();
            }

            return Ok(taxiRank);
        }

        // PUT: api/TaxiRanks/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTaxiRank(Guid id, TaxiRank taxiRank)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taxiRank.id)
            {
                return BadRequest();
            }

            db.Entry(taxiRank).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxiRankExists(id))
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

        // POST: api/TaxiRanks
        [ResponseType(typeof(TaxiRank))]
        public async Task<IHttpActionResult> PostTaxiRank(TaxiRank taxiRank)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TaxiRanks.Add(taxiRank);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TaxiRankExists(taxiRank.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = taxiRank.id }, taxiRank);
        }

        // DELETE: api/TaxiRanks/5
        [ResponseType(typeof(TaxiRank))]
        public async Task<IHttpActionResult> DeleteTaxiRank(Guid id)
        {
            TaxiRank taxiRank = await db.TaxiRanks.FindAsync(id);
            if (taxiRank == null)
            {
                return NotFound();
            }

            db.TaxiRanks.Remove(taxiRank);
            await db.SaveChangesAsync();

            return Ok(taxiRank);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaxiRankExists(Guid id)
        {
            return db.TaxiRanks.Count(e => e.id == id) > 0;
        }
    }
}