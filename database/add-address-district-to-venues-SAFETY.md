# Safety Explanation: Add Address & District to Venues

## ✅ This Script is 100% Safe - No Data Loss Risk

### Why It's Safe:

1. **Uses `IF NOT EXISTS` checks**
   - Checks if columns already exist before adding them
   - Won't fail if you run it multiple times
   - Won't overwrite existing columns

2. **All new columns are NULLABLE**
   - New columns allow NULL values
   - Existing rows won't be affected
   - No data will be lost or corrupted

3. **UPDATE uses `COALESCE` - Preserves Existing Data**
   ```sql
   address = COALESCE(address, (data_jsonb->>'address')::TEXT)
   ```
   - Only updates if `address` is NULL
   - If `address` already has a value, it keeps that value
   - Only copies FROM `data_jsonb` TO the new column (one-way)
   - Never overwrites existing data

4. **UPDATE has Safe WHERE Clause**
   - Only updates rows where data exists in `data_jsonb`
   - Only updates if the new column is NULL
   - Won't touch rows that already have values

### What It Does:

1. ✅ Adds `address` column (if missing) - NULLABLE, no data loss
2. ✅ Adds `district` column (if missing) - NULLABLE, no data loss  
3. ✅ Copies data FROM `data_jsonb` TO new columns (only if new columns are NULL)
4. ✅ Preserves all existing data in `data_jsonb`
5. ✅ Preserves all existing data in other columns

### What It Does NOT Do:

❌ Does NOT delete any data
❌ Does NOT modify existing `address` or `district` values if they exist
❌ Does NOT remove data from `data_jsonb`
❌ Does NOT change any other columns

### Verification:

The script ends with a SELECT query that shows you what columns exist, so you can verify everything worked correctly.

## Bottom Line:

**This script is READ-ONLY for existing data** - it only ADDS new columns and COPIES data from `data_jsonb` to those columns. It never deletes, overwrites, or modifies existing data. You can run it safely!
