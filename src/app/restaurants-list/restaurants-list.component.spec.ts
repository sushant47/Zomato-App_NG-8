import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponent } from './restaurants-list.component';
import { HttpService } from '../services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from '../services/location.service';
import { RestaurantService } from '../services/restaurant-service.service';
import { StorageService } from '../services/storage-service.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
const data = {
  location: {
    entity_type: 'subzone',
    entity_id: 3401,
    title: 'Aundh',
    latitude: '18.5599880000',
    longitude: '73.8069050000',
    city_id: 5,
    city_name: 'Pune',
    country_id: 1,
    country_name: 'India'
  },
  popularity: {
    popularity: '5.00',
    nightlife_index: '4.76',
    nearby_res: [
      '18378852',
      '13914',
      '18392659',
      '6504466',
      '10693',
      '6507355',
      '18473491',
      '18361183',
      '10686'
    ],
    top_cuisines: [
      'North Indian',
      'Fast Food',
      'Chinese',
      'Beverages',
      'Desserts'
    ],
    popularity_res: '100',
    nightlife_res: '10',
    subzone: 'Aundh',
    subzone_id: 3401,
    city: 'Pune'
  },
  link: 'https:\/\/www.zomato.com\/pune\/aundh-restaurants',
  nearby_restaurants: [
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18378852,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18378852',
        name: 'Effingut',
        url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop 4, Deron Heights, Near Ranka Jewellers, Baner, Pune',
          locality: 'Baner',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5543078818',
          longitude: '73.7981731072',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Baner, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Continental, North Indian, Mughlai, Italian, Asian',
        average_cost_for_two: 2000,
        price_range: 4,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/2\/18378852\/670eece057b1ac37b0d7ef904eca1172.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.6',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.6'
            },
            bg_color: {
              type: 'lime',
              tint: '800'
            }
          },
          votes: 3547
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/2\/18378852\/670eece057b1ac37b0d7ef904eca1172.jpg',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18378852',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 13914,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '13914',
        name: 'Greens & Olives',
        url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'New DP Road, Opposite Tangent Furniture, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5657157477',
          longitude: '73.8045634702',
          zipcode: '411007',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Italian, North Indian, Salad, Healthy Food',
        average_cost_for_two: 1300,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/4\/13914\/b2e7ef118d49a6f6dfba06433b7e4f5d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 4043
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/4\/13914\/b2e7ef118d49a6f6dfba06433b7e4f5d.jpg',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/13914',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18392659,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18392659',
        name: 'L\'Apicio',
        url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop D 8 & 9, Sai Heritage Society, Near Medipoint Hospital, New DP Road, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5652981211',
          longitude: '73.8014775887',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Cafe, European, Mediterranean, Continental, Salad, Healthy Food, Italian',
        average_cost_for_two: 1000,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/18392659\/ed08361674b9fe1b6c4c5e0ecadfffeb.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.4',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.4'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 1378
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/18392659\/ed08361674b9fe1b6c4c5e0ecadfffeb.jpeg?output-format=webp',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18392659',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 6504466,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '6504466',
        name: 'Hoppipola',
        url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Hotel Shree Nanda Excellency, 126\/2B, ITI Road, Aundh, Pune',
          locality: 'Hotel Shree Nanda Excellency, Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5522759000',
          longitude: '73.8091102000',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Hotel Shree Nanda Excellency, Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Finger Food, Italian, North Indian, Modern Indian, Salad',
        average_cost_for_two: 1600,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        zomato_events: [
          {
            event: {
              event_id: 441651,
              friendly_start_date: '13 February',
              friendly_end_date: '30 December',
              friendly_timing_str: 'Thursday, 13th February - Wednesday, 30th December',
              start_date: '2020-02-13',
              end_date: '2020-12-30',
              end_time: '23:55:00',
              start_time: '22:00:00',
              is_active: 1,
              date_added: '2020-01-09 15:34:41',
              photos: [
                {
                  photo: {
                    url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/b58\/2476899adc7d88a42151b47fcae15b58_1578564297.jpg',
                    thumb_url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/b58\/2476899adc7d88a42151b47fcae15b58_1578564297.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
                    order: 0,
                    md5sum: '2476899adc7d88a42151b47fcae15b58',
                    id: 598238,
                    photo_id: 598238,
                    uuid: 1578564441372255,
                    type: 'NORMAL'
                  }
                }
              ],
              restaurants: [

              ],
              is_valid: 1,
              share_url: 'http:\/\/www.zoma.to\/r\/0',
              show_share_url: 0,
              title: 'MRP Hours House Party | 2nd Drink At MRP',
              description: 'HOPPIPOLA has sorted out your mid-week house party! Get every 2nd drink @MRP from Sun to Thurs 10pm- 12 midnight',
              display_time: '10:00 pm - 11:55 pm',
              display_date: '13 February - 30 December',
              is_end_time_set: 1,
              disclaimer: 'Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations\/ modifications\/ complaints.',
              event_category: 0,
              event_category_name: '',
              book_link: '',
              types: [
                {
                  name: 'HAPPY HOURS',
                  color: '#E23744'
                }
              ],
              share_data: {
                should_show: 0
              }
            }
          },
          {
            event: {
              event_id: 441962,
              friendly_start_date: '16 February',
              friendly_end_date: '27 December',
              friendly_timing_str: 'Sunday, 16th February - Sunday, 27th December',
              start_date: '2020-02-16',
              end_date: '2020-12-27',
              end_time: '16:00:00',
              start_time: '11:55:00',
              is_active: 1,
              date_added: '2020-01-10 13:10:42',
              photos: [
                {
                  photo: {
                    url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/6af\/9528b69bf2a2948fec1be35eea7da6af_1578642057.jpg',
                    thumb_url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/6af\/9528b69bf2a2948fec1be35eea7da6af_1578642057.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
                    order: 0,
                    md5sum: '9528b69bf2a2948fec1be35eea7da6af',
                    id: 598725,
                    photo_id: 598725,
                    uuid: 1578642084328930,
                    type: 'NORMAL'
                  }
                }
              ],
              restaurants: [

              ],
              is_valid: 1,
              share_url: 'http:\/\/www.zoma.to\/r\/0',
              show_share_url: 0,
              title: 'Bottomless Sunday Fiesta',
              description: 'Every Sunday Unlimited Pizza, Garlic bread, Pasta & Salad @395 only.\nAdd Rs.500 more for Unlimited Beer, Cocktails & Sangria. 12 noon to 4pm.',
              display_time: '11:55 am - 04:00 pm',
              display_date: '16 February - 27 December',
              is_end_time_set: 1,
              disclaimer: 'Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations\/ modifications\/ complaints.',
              event_category: 0,
              event_category_name: '',
              book_link: '',
              types: [

              ],
              share_data: {
                should_show: 0
              }
            }
          }
        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/6\/6504466\/e27768825bcfdd6b06c46d9458d1e1b9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '3.9',
          rating_text: 'Good',
          rating_color: '9ACD32',
          rating_obj: {
            title: {
              text: '3.9'
            },
            bg_color: {
              type: 'lime',
              tint: '600'
            }
          },
          votes: 2739
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/6\/6504466\/e27768825bcfdd6b06c46d9458d1e1b9.jpg?output-format=webp',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/6504466',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 10693,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '10693',
        name: 'Taaareef',
        url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '1, Shyamal Apartments, Near Ozone, ITI Road, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5559927000',
          longitude: '73.8092702000',
          zipcode: '0',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Biryani, North Indian, Mughlai, Lucknowi',
        average_cost_for_two: 1200,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/10693_RESTAURANT_30055934b0bde0ed7aa7fff0ded22dab_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 6027
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/10693_RESTAURANT_30055934b0bde0ed7aa7fff0ded22dab_c.jpg',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/10693',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 6507355,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '6507355',
        name: 'Filament Bar',
        url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Rajwada Chowk, Baner Main Road, Baner, Pune',
          locality: 'Baner',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5515343063',
          longitude: '73.8047961518',
          zipcode: '411045',
          country_id: 1,
          locality_verbose: 'Baner, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Continental, Italian, North Indian, Asian, Bar Food, Mughlai, Seafood',
        average_cost_for_two: 1400,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/6507355\/9a5c869f36c9e6467cd444bb33016f1c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 1530
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/6507355\/9a5c869f36c9e6467cd444bb33016f1c.jpg',
        medio_provider: 1,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/6507355',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18473491,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18473491',
        name: 'The Blue Plate',
        url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop 3E, Chaitraban Society, Opposite Croma, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5533740000',
          longitude: '73.8068050000',
          zipcode: '411007',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Continental, Italian, Salad, Desserts, Beverages',
        average_cost_for_two: 700,
        price_range: 2,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/1\/18473491\/343eae8f92483884c00bf55c247eb17e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 2916
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/1\/18473491\/343eae8f92483884c00bf55c247eb17e.jpg?output-format=webp',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18473491',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18361183,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18361183',
        name: 'Maratha Samrat',
        url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'MontVert Zenith Building, Beside Veritas IT Park, Baner, Pune',
          locality: 'Baner',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5556552397',
          longitude: '73.7953450531',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Baner, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Maharashtrian',
        average_cost_for_two: 1100,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/18361183_RESTAURANT_be4bdb9ebd7b9da554168e9c751a8232.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 3726
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/18361183_RESTAURANT_be4bdb9ebd7b9da554168e9c751a8232.jpg',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18361183',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 10686,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '10686',
        name: 'Delhi Kitchen',
        url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop 1-4, Nirmal Apartment, Park Avenue, Kotbagi Hospital Lane, DP Road, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5635742088',
          longitude: '73.8046301901',
          zipcode: '0',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'North Indian, Biryani',
        average_cost_for_two: 800,
        price_range: 2,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/10686\/01c9c61ca2d8c6283acb03dbd95f2d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 12402
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/10686\/01c9c61ca2d8c6283acb03dbd95f2d4c.jpg?output-format=webp',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/10686',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    }
  ]
};
const restaurantList = {
  location: {
    entity_type: 'subzone',
    entity_id: 3401,
    title: 'Aundh',
    latitude: '18.5599880000',
    longitude: '73.8069050000',
    city_id: 5,
    city_name: 'Pune',
    country_id: 1,
    country_name: 'India'
  },
  popularity: {
    popularity: '5.00',
    nightlife_index: '4.76',
    nearby_res: [
      '18378852',
      '13914',
      '18392659',
      '6504466',
      '10693',
      '6507355',
      '18473491',
      '18361183',
      '10686'
    ],
    top_cuisines: [
      'North Indian',
      'Fast Food',
      'Chinese',
      'Beverages',
      'Desserts'
    ],
    popularity_res: '100',
    nightlife_res: '10',
    subzone: 'Aundh',
    subzone_id: 3401,
    city: 'Pune'
  },
  link: 'https:\/\/www.zomato.com\/pune\/aundh-restaurants',
  nearby_restaurants: [
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18378852,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18378852',
        name: 'Effingut',
        url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop 4, Deron Heights, Near Ranka Jewellers, Baner, Pune',
          locality: 'Baner',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5543078818',
          longitude: '73.7981731072',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Baner, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Continental, North Indian, Mughlai, Italian, Asian',
        average_cost_for_two: 2000,
        price_range: 4,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/2\/18378852\/670eece057b1ac37b0d7ef904eca1172.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.6',
          rating_text: 'Excellent',
          rating_color: '3F7E00',
          rating_obj: {
            title: {
              text: '4.6'
            },
            bg_color: {
              type: 'lime',
              tint: '800'
            }
          },
          votes: 3547
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/2\/18378852\/670eece057b1ac37b0d7ef904eca1172.jpg',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18378852',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/effingut-2-baner\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 13914,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '13914',
        name: 'Greens & Olives',
        url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'New DP Road, Opposite Tangent Furniture, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5657157477',
          longitude: '73.8045634702',
          zipcode: '411007',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Italian, North Indian, Salad, Healthy Food',
        average_cost_for_two: 1300,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/4\/13914\/b2e7ef118d49a6f6dfba06433b7e4f5d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 4043
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/4\/13914\/b2e7ef118d49a6f6dfba06433b7e4f5d.jpg',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/13914',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/greens-olives-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18392659,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18392659',
        name: 'L\'Apicio',
        url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop D 8 & 9, Sai Heritage Society, Near Medipoint Hospital, New DP Road, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5652981211',
          longitude: '73.8014775887',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Cafe, European, Mediterranean, Continental, Salad, Healthy Food, Italian',
        average_cost_for_two: 1000,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/18392659\/ed08361674b9fe1b6c4c5e0ecadfffeb.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.4',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.4'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 1378
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/18392659\/ed08361674b9fe1b6c4c5e0ecadfffeb.jpeg?output-format=webp',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18392659',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/lapicio-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 6504466,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '6504466',
        name: 'Hoppipola',
        url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Hotel Shree Nanda Excellency, 126\/2B, ITI Road, Aundh, Pune',
          locality: 'Hotel Shree Nanda Excellency, Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5522759000',
          longitude: '73.8091102000',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Hotel Shree Nanda Excellency, Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Finger Food, Italian, North Indian, Modern Indian, Salad',
        average_cost_for_two: 1600,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        zomato_events: [
          {
            event: {
              event_id: 441651,
              friendly_start_date: '13 February',
              friendly_end_date: '30 December',
              friendly_timing_str: 'Thursday, 13th February - Wednesday, 30th December',
              start_date: '2020-02-13',
              end_date: '2020-12-30',
              end_time: '23:55:00',
              start_time: '22:00:00',
              is_active: 1,
              date_added: '2020-01-09 15:34:41',
              photos: [
                {
                  photo: {
                    url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/b58\/2476899adc7d88a42151b47fcae15b58_1578564297.jpg',
                    thumb_url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/b58\/2476899adc7d88a42151b47fcae15b58_1578564297.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
                    order: 0,
                    md5sum: '2476899adc7d88a42151b47fcae15b58',
                    id: 598238,
                    photo_id: 598238,
                    uuid: 1578564441372255,
                    type: 'NORMAL'
                  }
                }
              ],
              restaurants: [

              ],
              is_valid: 1,
              share_url: 'http:\/\/www.zoma.to\/r\/0',
              show_share_url: 0,
              title: 'MRP Hours House Party | 2nd Drink At MRP',
              description: 'HOPPIPOLA has sorted out your mid-week house party! Get every 2nd drink @MRP from Sun to Thurs 10pm- 12 midnight',
              display_time: '10:00 pm - 11:55 pm',
              display_date: '13 February - 30 December',
              is_end_time_set: 1,
              disclaimer: 'Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations\/ modifications\/ complaints.',
              event_category: 0,
              event_category_name: '',
              book_link: '',
              types: [
                {
                  name: 'HAPPY HOURS',
                  color: '#E23744'
                }
              ],
              share_data: {
                should_show: 0
              }
            }
          },
          {
            event: {
              event_id: 441962,
              friendly_start_date: '16 February',
              friendly_end_date: '27 December',
              friendly_timing_str: 'Sunday, 16th February - Sunday, 27th December',
              start_date: '2020-02-16',
              end_date: '2020-12-27',
              end_time: '16:00:00',
              start_time: '11:55:00',
              is_active: 1,
              date_added: '2020-01-10 13:10:42',
              photos: [
                {
                  photo: {
                    url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/6af\/9528b69bf2a2948fec1be35eea7da6af_1578642057.jpg',
                    thumb_url: 'https:\/\/b.zmtcdn.com\/data\/zomato_events\/photos\/6af\/9528b69bf2a2948fec1be35eea7da6af_1578642057.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
                    order: 0,
                    md5sum: '9528b69bf2a2948fec1be35eea7da6af',
                    id: 598725,
                    photo_id: 598725,
                    uuid: 1578642084328930,
                    type: 'NORMAL'
                  }
                }
              ],
              restaurants: [

              ],
              is_valid: 1,
              share_url: 'http:\/\/www.zoma.to\/r\/0',
              show_share_url: 0,
              title: 'Bottomless Sunday Fiesta',
              description: 'Every Sunday Unlimited Pizza, Garlic bread, Pasta & Salad @395 only.\nAdd Rs.500 more for Unlimited Beer, Cocktails & Sangria. 12 noon to 4pm.',
              display_time: '11:55 am - 04:00 pm',
              display_date: '16 February - 27 December',
              is_end_time_set: 1,
              disclaimer: 'Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations\/ modifications\/ complaints.',
              event_category: 0,
              event_category_name: '',
              book_link: '',
              types: [

              ],
              share_data: {
                should_show: 0
              }
            }
          }
        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/6\/6504466\/e27768825bcfdd6b06c46d9458d1e1b9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '3.9',
          rating_text: 'Good',
          rating_color: '9ACD32',
          rating_obj: {
            title: {
              text: '3.9'
            },
            bg_color: {
              type: 'lime',
              tint: '600'
            }
          },
          votes: 2739
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/6\/6504466\/e27768825bcfdd6b06c46d9458d1e1b9.jpg?output-format=webp',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/6504466',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/hoppipola-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 10693,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '10693',
        name: 'Taaareef',
        url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: '1, Shyamal Apartments, Near Ozone, ITI Road, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5559927000',
          longitude: '73.8092702000',
          zipcode: '0',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Biryani, North Indian, Mughlai, Lucknowi',
        average_cost_for_two: 1200,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/10693_RESTAURANT_30055934b0bde0ed7aa7fff0ded22dab_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 6029
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/10693_RESTAURANT_30055934b0bde0ed7aa7fff0ded22dab_c.jpg',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/10693',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/taaareef-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 6507355,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '6507355',
        name: 'Filament Bar',
        url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Rajwada Chowk, Baner Main Road, Baner, Pune',
          locality: 'Baner',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5515343063',
          longitude: '73.8047961518',
          zipcode: '411045',
          country_id: 1,
          locality_verbose: 'Baner, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Continental, Italian, North Indian, Asian, Bar Food, Mughlai, Seafood',
        average_cost_for_two: 1400,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/6507355\/9a5c869f36c9e6467cd444bb33016f1c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 1530
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/6507355\/9a5c869f36c9e6467cd444bb33016f1c.jpg',
        medio_provider: 1,
        has_online_delivery: 0,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/6507355',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/filament-bar-baner\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18473491,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18473491',
        name: 'The Blue Plate',
        url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop 3E, Chaitraban Society, Opposite Croma, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5533740000',
          longitude: '73.8068050000',
          zipcode: '411007',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Continental, Italian, Salad, Desserts, Beverages',
        average_cost_for_two: 700,
        price_range: 2,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/1\/18473491\/343eae8f92483884c00bf55c247eb17e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 2916
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/1\/18473491\/343eae8f92483884c00bf55c247eb17e.jpg?output-format=webp',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18473491',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/the-blue-plate-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 18361183,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '18361183',
        name: 'Maratha Samrat',
        url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'MontVert Zenith Building, Beside Veritas IT Park, Baner, Pune',
          locality: 'Baner',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5556552397',
          longitude: '73.7953450531',
          zipcode: '',
          country_id: 1,
          locality_verbose: 'Baner, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'Maharashtrian',
        average_cost_for_two: 1100,
        price_range: 3,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/18361183_RESTAURANT_be4bdb9ebd7b9da554168e9c751a8232.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.3',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.3'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 3726
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/res_imagery\/18361183_RESTAURANT_be4bdb9ebd7b9da554168e9c751a8232.jpg',
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/18361183',
        is_table_reservation_supported: 0,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/maratha-samrat-baner\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    },
    {
      restaurant: {
        R: {
          has_menu_status: {
            delivery: -1,
            takeaway: -1
          },
          res_id: 10686,
          is_grocery_store: false
        },
        apikey: '2992de5d38229d6ddc7514fda07d8430',
        id: '10686',
        name: 'Delhi Kitchen',
        url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
        location: {
          address: 'Shop 1-4, Nirmal Apartment, Park Avenue, Kotbagi Hospital Lane, DP Road, Aundh, Pune',
          locality: 'Aundh',
          city: 'Pune',
          city_id: 5,
          latitude: '18.5635742088',
          longitude: '73.8046301901',
          zipcode: '0',
          country_id: 1,
          locality_verbose: 'Aundh, Pune'
        },
        switch_to_order_menu: 0,
        cuisines: 'North Indian, Biryani',
        average_cost_for_two: 800,
        price_range: 2,
        currency: 'Rs.',
        offers: [

        ],
        opentable_support: 0,
        is_zomato_book_res: 0,
        mezzo_provider: 'OTHER',
        is_book_form_web_view: 0,
        book_form_web_view_url: '',
        book_again_url: '',
        thumb: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/10686\/01c9c61ca2d8c6283acb03dbd95f2d4c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        user_rating: {
          aggregate_rating: '4.2',
          rating_text: 'Very Good',
          rating_color: '5BA829',
          rating_obj: {
            title: {
              text: '4.2'
            },
            bg_color: {
              type: 'lime',
              tint: '700'
            }
          },
          votes: 12404
        },
        photos_url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh\/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop',
        menu_url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh\/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop',
        featured_image: 'https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/10686\/01c9c61ca2d8c6283acb03dbd95f2d4c.jpg?output-format=webp',
        medio_provider: 1,
        has_online_delivery: 1,
        is_delivering_now: 0,
        store_type: '',
        include_bogo_offers: true,
        deeplink: 'zomato:\/\/restaurant\/10686',
        is_table_reservation_supported: 1,
        has_table_booking: 0,
        events_url: 'https:\/\/www.zomato.com\/pune\/delhi-kitchen-aundh\/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1'
      }
    }
  ]
};
describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let locationService: LocationService;
  let restaurantService: RestaurantService;
  let storageService: StorageService;
  let locationService1: LocationService;
  let restaurantService1: RestaurantService;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RestaurantListComponent],
      providers: [LocationService,
        StorageService,
        { provide: Router, useValue: router }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    locationService1 = TestBed.get(LocationService);
    restaurantService1 = TestBed.get(RestaurantService);
    storageService = TestBed.get(StorageService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  //   it('should call getCoordinates', () => {
  //     const spy = spyOn(locationService1, 'getLocation').and.callFake(() => {
  //       return of(data);
  //     });
  //     const spy1 = spyOn(restaurantService, 'getNearByRestaurants').and.callFake(this.getRestaurantList('123', '1234'));
  //     fixture.detectChanges();
  //     // spyOn(component, 'ngOnInit').and.callThrough();
  //     expect(locationService.getLocation).toHaveBeenCalled();
  //   });
  it('should call getRestaurantDetails', () => {
    spyOn(component, 'getRestaurantDetails').and.callThrough();
    const mySpy = spyOn(storageService, 'setData').and.callThrough();
    component.getRestaurantDetails([]);
    expect(component.getRestaurantDetails).toHaveBeenCalled();
    expect(mySpy).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/restaurant-details']);
  });
});

export function getRestaurantList(lat, long) {
  const restauranstList = (lat, long) => {
    return of(restaurantList);
  };
  return restaurantList;
}
