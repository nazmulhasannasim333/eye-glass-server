import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this.query.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
            }) as FilterQuery<T>
        ),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ["searchTerm", "sort", "limit", "page", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  //   filterByPriceRange(minPrice: number, maxPrice: number) {
  //     if (minPrice !== undefined && maxPrice !== undefined) {
  //       console.log({ minPrice, maxPrice });
  //       this.modelQuery = this.modelQuery.find({
  //         productPrice: { $gte: minPrice, $lte: maxPrice },
  //       } as FilterQuery<T>);
  //     }
  //     return this;
  //   }

  //   filterByPriceRange(minPrice: number, maxPrice: number) {
  //     if (minPrice !== undefined && maxPrice !== undefined) {
  //       console.log({ minPrice, maxPrice });

  //       const priceRangeQuery: FilterQuery<T> = {
  //         productPrice: { $gte: minPrice, $lte: maxPrice },
  //       };
  //       console.log({ priceRangeQuery });

  //       this.modelQuery = this.modelQuery.find(priceRangeQuery);
  //     }

  //     return this;
  //   }

  //   filterByPriceRange(minPrice: number, maxPrice: number) {
  //     minPrice = Number(minPrice);
  //     maxPrice = Number(maxPrice);

  //     if (!isNaN(minPrice) && !isNaN(maxPrice)) {
  //       const priceRangeQuery: FilterQuery<T> = {
  //         productPrice: { $gte: minPrice, $lte: maxPrice },
  //       };
  //       console.log({ priceRangeQuery });

  //       this.modelQuery = this.modelQuery.find(priceRangeQuery);
  //     }

  //     return this;
  //   }
}

export default QueryBuilder;
