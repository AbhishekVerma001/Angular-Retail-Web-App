import { TestBed } from '@angular/core/testing';

import { CheckoutFormService } from './checkout-form.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CheckoutFormService', () => {
  let service: CheckoutFormService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CheckoutFormService);
  });
  afterEach(() => {
    httpMock.verify();
});

  it('should test getCountries', (done) => {
    expect(service).toBeTruthy();
    httpMock = TestBed.inject(HttpTestingController);
    const url='http://localhost:8080/countries';
    const res={
      "_embedded": {
          "countries": [
              {
                  "id": 1,
                  "code": "BR",
                  "name": "Brazil",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/countries/1"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/countries/1"
                      },
                      "states": {
                          "href": "http://192.168.1.107:8081/countries/1/states"
                      }
                  }
              },
              {
                  "id": 2,
                  "code": "CA",
                  "name": "Canada",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/countries/2"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/countries/2"
                      },
                      "states": {
                          "href": "http://192.168.1.107:8081/countries/2/states"
                      }
                  }
              },
              {
                  "id": 3,
                  "code": "DE",
                  "name": "Germany",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/countries/3"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/countries/3"
                      },
                      "states": {
                          "href": "http://192.168.1.107:8081/countries/3/states"
                      }
                  }
              },
              {
                  "id": 4,
                  "code": "IN",
                  "name": "India",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/countries/4"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/countries/4"
                      },
                      "states": {
                          "href": "http://192.168.1.107:8081/countries/4/states"
                      }
                  }
              },
              {
                  "id": 5,
                  "code": "TR",
                  "name": "Turkey",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/countries/5"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/countries/5"
                      },
                      "states": {
                          "href": "http://192.168.1.107:8081/countries/5/states"
                      }
                  }
              },
              {
                  "id": 6,
                  "code": "US",
                  "name": "United States",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/countries/6"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/countries/6"
                      },
                      "states": {
                          "href": "http://192.168.1.107:8081/countries/6/states"
                      }
                  }
              }
          ]
      },
      "_links": {
          "self": {
              "href": "http://192.168.1.107:8081/countries"
          },
          "profile": {
              "href": "http://192.168.1.107:8081/profile/countries"
          }
      }
    }
    service.getCountries().subscribe({
      next:data => {
        expect(data).toEqual(res._embedded.countries);
        
        done();
      }
      });
 
    const req = httpMock.expectOne(url);
        expect(req.request.method).toBe('GET');
        //expect(req.request.url).toBe(url);
        req.flush(res);

  });

  it('should test getStates', (done) => {
    expect(service).toBeTruthy();
    httpMock = TestBed.inject(HttpTestingController);
    const url='http://localhost:8080/states/search/findByCountryCode?code=IN';
    const states={
      "_embedded": {
          "states": [
              {
                  "id": 57,
                  "name": "Andhra Pradesh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/57"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/57"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/57/country"
                      }
                  }
              },
              {
                  "id": 58,
                  "name": "Arunachal Pradesh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/58"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/58"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/58/country"
                      }
                  }
              },
              {
                  "id": 59,
                  "name": "Assam",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/59"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/59"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/59/country"
                      }
                  }
              },
              {
                  "id": 60,
                  "name": "Bihar",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/60"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/60"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/60/country"
                      }
                  }
              },
              {
                  "id": 61,
                  "name": "Chhattisgarh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/61"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/61"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/61/country"
                      }
                  }
              },
              {
                  "id": 62,
                  "name": "Goa",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/62"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/62"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/62/country"
                      }
                  }
              },
              {
                  "id": 63,
                  "name": "Gujarat",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/63"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/63"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/63/country"
                      }
                  }
              },
              {
                  "id": 64,
                  "name": "Haryana",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/64"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/64"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/64/country"
                      }
                  }
              },
              {
                  "id": 65,
                  "name": "Himachal Pradesh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/65"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/65"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/65/country"
                      }
                  }
              },
              {
                  "id": 66,
                  "name": "Jammu & Kashmir",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/66"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/66"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/66/country"
                      }
                  }
              },
              {
                  "id": 67,
                  "name": "Jharkhand",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/67"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/67"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/67/country"
                      }
                  }
              },
              {
                  "id": 68,
                  "name": "Karnataka",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/68"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/68"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/68/country"
                      }
                  }
              },
              {
                  "id": 69,
                  "name": "Kerala",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/69"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/69"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/69/country"
                      }
                  }
              },
              {
                  "id": 70,
                  "name": "Madhya Pradesh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/70"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/70"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/70/country"
                      }
                  }
              },
              {
                  "id": 71,
                  "name": "Maharashtra",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/71"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/71"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/71/country"
                      }
                  }
              },
              {
                  "id": 72,
                  "name": "Manipur",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/72"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/72"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/72/country"
                      }
                  }
              },
              {
                  "id": 73,
                  "name": "Meghalaya",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/73"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/73"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/73/country"
                      }
                  }
              },
              {
                  "id": 74,
                  "name": "Mizoram",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/74"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/74"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/74/country"
                      }
                  }
              },
              {
                  "id": 75,
                  "name": "Nagaland",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/75"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/75"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/75/country"
                      }
                  }
              },
              {
                  "id": 76,
                  "name": "Odisha",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/76"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/76"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/76/country"
                      }
                  }
              },
              {
                  "id": 77,
                  "name": "Punjab",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/77"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/77"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/77/country"
                      }
                  }
              },
              {
                  "id": 78,
                  "name": "Rajasthan",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/78"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/78"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/78/country"
                      }
                  }
              },
              {
                  "id": 79,
                  "name": "Sikkim",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/79"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/79"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/79/country"
                      }
                  }
              },
              {
                  "id": 80,
                  "name": "Tamil Nadu",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/80"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/80"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/80/country"
                      }
                  }
              },
              {
                  "id": 81,
                  "name": "Telangana",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/81"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/81"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/81/country"
                      }
                  }
              },
              {
                  "id": 82,
                  "name": "Tripura",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/82"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/82"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/82/country"
                      }
                  }
              },
              {
                  "id": 83,
                  "name": "Uttar Pradesh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/83"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/83"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/83/country"
                      }
                  }
              },
              {
                  "id": 84,
                  "name": "Uttarakhand",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/84"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/84"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/84/country"
                      }
                  }
              },
              {
                  "id": 85,
                  "name": "West Bengal",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/85"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/85"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/85/country"
                      }
                  }
              },
              {
                  "id": 86,
                  "name": "Andaman and Nicobar Islands",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/86"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/86"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/86/country"
                      }
                  }
              },
              {
                  "id": 87,
                  "name": "Chandigarh",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/87"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/87"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/87/country"
                      }
                  }
              },
              {
                  "id": 88,
                  "name": "Dadra and Nagar Haveli",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/88"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/88"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/88/country"
                      }
                  }
              },
              {
                  "id": 89,
                  "name": "Daman & Diu",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/89"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/89"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/89/country"
                      }
                  }
              },
              {
                  "id": 90,
                  "name": "Lakshadweep",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/90"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/90"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/90/country"
                      }
                  }
              },
              {
                  "id": 91,
                  "name": "Puducherry",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/91"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/91"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/91/country"
                      }
                  }
              },
              {
                  "id": 92,
                  "name": "The Government of NCT of Delhi",
                  "_links": {
                      "self": {
                          "href": "http://192.168.1.107:8081/states/92"
                      },
                      "state": {
                          "href": "http://192.168.1.107:8081/states/92"
                      },
                      "country": {
                          "href": "http://192.168.1.107:8081/states/92/country"
                      }
                  }
              }
          ]
      },
      "_links": {
          "self": {
              "href": "http://192.168.1.107:8081/states/search/findByCountryCode?code=IN"
          }
      }
  }
  const countryCode="IN";
    service.getStates(countryCode).subscribe({
      next:data => {
        expect(data).toEqual(states._embedded.states);
        
        done();
      }
    });
    const req = httpMock.expectOne(url);
        expect(req.request.method).toBe('GET');
        //expect(req.request.url).toBe(url);
        req.flush(states);
  });

  it('should test getCardMonths', (done) => {
    expect(service).toBeTruthy();
    const  startMonth:number=3;
    const months:number[]=[3,4,5,6,7,8,9,10,11,12];
    service.getCardMonths(startMonth).subscribe({
      next:data => {
        expect(data).toEqual(months);
        expect(months).toContain(startMonth);
        
        done();
      }
      });
 
  });

  it('should test getCardYears', (done) => {
    expect(service).toBeTruthy();
    const  currentYear:number=2023;
    const years:number[]=[2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033];
    service.getCardYears().subscribe({
      next:data => {
        expect(data).toEqual(years);
        expect(years).toContain(currentYear);
        
        done();
      }
      });
 
  });
});
