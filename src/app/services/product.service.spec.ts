import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
    providers:[ProductService] });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    //httpMock.verify();
});

  it('should test getAllProducts', (done) => {
    expect(service).toBeTruthy();
    const products ={
      "_embedded" : {
        "products": [ {
      "id" : 1,
      "product_id" : 3168,
      "name" : "Nike Men's Incinerate MSL White Blue Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 560,
      "imageUrl" : "assets/images/products/Men/Shoes/3168.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/1"
        },
        "product" : {
          "href" : "http://localhost:8081/products/1"
        },
        "category" : {
          "href" : "http://localhost:8081/products/1/category"
        }
      }
    }, {
      "id" : 2,
      "product_id" : 4171,
      "name" : "Reebok Men's Easytone Inspire White Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 2700,
      "imageUrl" : "assets/images/products/Men/Shoes/4171.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/2"
        },
        "product" : {
          "href" : "http://localhost:8081/products/2"
        },
        "category" : {
          "href" : "http://localhost:8081/products/2/category"
        }
      }
    }
  ]
}
}
  // httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/products';
  service.getAllProducts(url).subscribe({
    next:data => {
      expect(data).toEqual(products._embedded.products);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(products);
  httpMock.verify();
  });

  it('should test getProductCatalog', (done) => {
    expect(service).toBeTruthy();
    const products ={
      "_embedded" : {
        "products": [ {
      "id" : 1,
      "product_id" : 3168,
      "name" : "Nike Men's Incinerate MSL White Blue Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 560,
      "imageUrl" : "assets/images/products/Men/Shoes/3168.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/1"
        },
        "product" : {
          "href" : "http://localhost:8081/products/1"
        },
        "category" : {
          "href" : "http://localhost:8081/products/1/category"
        }
      }
    }, {
      "id" : 2,
      "product_id" : 4171,
      "name" : "Reebok Men's Easytone Inspire White Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 2700,
      "imageUrl" : "assets/images/products/Men/Shoes/4171.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/2"
        },
        "product" : {
          "href" : "http://localhost:8081/products/2"
        },
        "category" : {
          "href" : "http://localhost:8081/products/2/category"
        }
      }
    }
  ]
}
}
  //httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/products';
  service.getAllProducts(url).subscribe({
    next:data => {
      expect(data).toEqual(products._embedded.products);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(products);
  httpMock.verify();
  });

  it('should test getProductCatalogByGender', (done) => {
    expect(service).toBeTruthy();
    const products ={
      "_embedded" : {
        "products": [ {
      "id" : 1,
      "product_id" : 3168,
      "name" : "Nike Men's Incinerate MSL White Blue Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 560,
      "imageUrl" : "assets/images/products/Men/Shoes/3168.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/1"
        },
        "product" : {
          "href" : "http://localhost:8081/products/1"
        },
        "category" : {
          "href" : "http://localhost:8081/products/1/category"
        }
      }
    }, {
      "id" : 2,
      "product_id" : 4171,
      "name" : "Reebok Men's Easytone Inspire White Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 2700,
      "imageUrl" : "assets/images/products/Men/Shoes/4171.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/2"
        },
        "product" : {
          "href" : "http://localhost:8081/products/2"
        },
        "category" : {
          "href" : "http://localhost:8081/products/2/category"
        }
      }
    }
  ]
}
}
  //httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/products/search/findProductsByGender?gender=Men';
  service.getAllProducts(url).subscribe({
    next:data => {
      expect(data).toEqual(products._embedded.products);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(products);
  httpMock.verify();
  });

  it('should test getProductCatalogByGenderAndCategory_Id', (done) => {
    expect(service).toBeTruthy();
    const productCategories ={
      "_embedded" : {
        "products": [ {
          "id" : 26,
          "product_id" : 12967,
          "name" : "ADIDAS Men Spry M Black Sandals",
          "gender" : "Men",
          "description" : "Sandals",
          "unitPrice" : 950,
          "imageUrl" : "assets/images/products/Men/Sandal/12967.jpg",
          "active" : true,
          "unitsInStock" : 100,
          "dateCreated" : "2023-03-19",
          "lastUpdated" : null,
          "colour" : "Black",
          "productUsage" : "Casual",
          "_links" : {
            "self" : {
              "href" : "http://localhost:8081/products/26"
            },
            "product" : {
              "href" : "http://localhost:8081/products/26"
            },
            "category" : {
              "href" : "http://localhost:8081/products/26/category"
            }
          }
        }, {
          "id" : 28,
          "product_id" : 5608,
          "name" : "ADIDAS Men Kendall Black Navy Floater",
          "gender" : "Men",
          "description" : "Sandals",
          "unitPrice" : 3480,
          "imageUrl" : "assets/images/products/Men/Sandal/5608.jpg",
          "active" : true,
          "unitsInStock" : 100,
          "dateCreated" : "2023-03-19",
          "lastUpdated" : null,
          "colour" : "Black",
          "productUsage" : "Casual",
          "_links" : {
            "self" : {
              "href" : "http://localhost:8081/products/28"
            },
            "product" : {
              "href" : "http://localhost:8081/products/28"
            },
            "category" : {
              "href" : "http://localhost:8081/products/28/category"
            }
          }
        }
  ]
}
}
  //httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/products/search/findProductsByGenderAndCategory_Id?gender=Men&categoryId=2';
  service.getAllProducts(url).subscribe({
    next:data => {
      expect(data).toEqual(productCategories._embedded.products);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(productCategories);
  httpMock.verify();
  });

  it('should test getProductCategories', (done) => {
    expect(service).toBeTruthy();
    const products ={
      "_embedded" : {
        "Category" : [ {
          "id" : 1,
          "categoryName" : "Flip_Flops",
          "_links" : {
            "self" : {
              "href" : "http://localhost:8081/product-category/1"
            },
            "category" : {
              "href" : "http://localhost:8081/product-category/1"
            },
            "products" : {
              "href" : "http://localhost:8081/product-category/1/products"
            }
          }
        }, {
          "id" : 2,
          "categoryName" : "Sandal",
          "_links" : {
            "self" : {
              "href" : "http://localhost:8081/product-category/2"
            },
            "category" : {
              "href" : "http://localhost:8081/product-category/2"
            },
            "products" : {
              "href" : "http://localhost:8081/product-category/2/products"
            }
          }
        }
      ]
}
}
  //httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/product-category';
  service.getProductCategories().subscribe({
    next:data => {
      expect(data).toEqual(products._embedded.Category);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(products);
  httpMock.verify();
  });

  it('should test searchProducts', (done) => {
    expect(service).toBeTruthy();
    const products ={
      "_embedded" : {
        "products" : [ {
          "id" : 9,
          "product_id" : 3560,
          "name" : "Skechers Men Off White Lifestyle Casual Shoe",
          "gender" : "Men",
          "description" : "Casual Shoes",
          "unitPrice" : 1690,
          "imageUrl" : "assets/images/products/Men/Shoes/3560.jpg",
          "active" : true,
          "unitsInStock" : 100,
          "dateCreated" : "2023-03-19",
          "lastUpdated" : null,
          "colour" : "White",
          "productUsage" : "Casual",
          "_links" : {
            "self" : {
              "href" : "http://localhost:8081/products/9"
            },
            "product" : {
              "href" : "http://localhost:8081/products/9"
            },
            "category" : {
              "href" : "http://localhost:8081/products/9/category"
            }
          }
        }, {
          "id" : 18,
          "product_id" : 3561,
          "name" : "Skechers Men's Zeta Black Lifestyle Casual Shoe",
          "gender" : "Men",
          "description" : "Casual Shoes",
          "unitPrice" : 2770,
          "imageUrl" : "assets/images/products/Men/Shoes/3561.jpg",
          "active" : true,
          "unitsInStock" : 100,
          "dateCreated" : "2023-03-19",
          "lastUpdated" : null,
          "colour" : "Black",
          "productUsage" : "Casual",
          "_links" : {
            "self" : {
              "href" : "http://localhost:8081/products/18"
            },
            "product" : {
              "href" : "http://localhost:8081/products/18"
            },
            "category" : {
              "href" : "http://localhost:8081/products/18/category"
            }
          }
        }
      ]
}
}
  //httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/products/search/findByNameContaining?name=casual';
  service.searchProducts('casual').subscribe({
    next:data => {
      expect(data).toEqual(products._embedded.products);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(products);
  httpMock.verify();
  });

  it('should test getAllProducts', (done) => {
    expect(service).toBeTruthy();
    const products ={
      "id" : 1,
      "product_id" : 3168,
      "name" : "Nike Men's Incinerate MSL White Blue Shoe",
      "gender" : "Men",
      "description" : "Sports Shoes",
      "unitPrice" : 560,
      "imageUrl" : "assets/images/products/Men/Shoes/3168.jpg",
      "active" : true,
      "unitsInStock" : 100,
      "dateCreated" : "2023-03-19",
      "lastUpdated" : null,
      "colour" : "White",
      "productUsage" : "Sports",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8081/products/1"
        },
        "product" : {
          "href" : "http://localhost:8081/products/1"
        },
        "category" : {
          "href" : "http://localhost:8081/products/1/category"
        }
      }
    }
  //httpMock = TestBed.inject(HttpTestingController);
  const url='http://localhost:8080/products/1';
  service.getProduct(1).subscribe({
    next:data => {
      expect(data).toEqual(products);
      
      done();
    }
   
  });
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe('GET');
  req.flush(products);
  httpMock.verify();
  });
});
