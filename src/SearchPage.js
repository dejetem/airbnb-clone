import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchPage_info">
                <p>30 stays . Nov 26 to Nov 30 . 2 guests</p>
                <h1>Stays nearby</h1>
                <Button 
                   variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button 
                   variant="outlined">
                    Type Of Place
                </Button>
                <Button 
                   variant="outlined">
                    Price
                </Button>
                <Button 
                   variant="outlined">
                    Rooms and Beds
                </Button>
                <Button 
                   variant="outlined">
                    More Filters
                </Button>
            </div>
            <SearchResult 
               img="https://decoholic.org/wp-content/uploads/2013/01/Pure_White_House_by_Susanna_Cots.jpg"
               location="An Open House In Banana Island" 
               title="Open House" 
               description = "2 guest . 2 bedroom . 2 beds . 2 shared bathroom . wifi . kitchen . Free Parking . Washing Machine" 
               star ={4.8}
               price ="$70/night" 
               total = "$450 total"
            />
            <SearchResult 
               img="https://www.thespruce.com/thmb/nOjshhSBgPA8x9_S_p4uwXifd3E=/1255x837/filters:fill(auto,1)/PlainWhiteLR_Getty-56a1934e3df78cf7726c2124.jpg"
               location="An Open House In Lekki 1" 
               title="Open House" 
               description = "1 guest .  bedroom .  beds . 1 shared bathroom . wifi . kitchen . Free Parking . Washing Machine" 
               star ={4.8}
               price ="$10/night" 
               total = "$150 total"
            />
            <SearchResult 
               img="https://www.dhoumm.co/cdn-k1/pi/beautiful-all-white-house-with-pool_room-interior-and-decoration.jpg"
               location="An Open House In VI" 
               title="Open House" 
               description = "6 guest . 6 bedroom . 6 beds . 6 shared bathroom . wifi . kitchen . Free Parking . Washing Machine" 
               star ={4.8}
               price ="$170/night" 
               total = "$1450 total"
            />
            <SearchResult 
               img="https://cdn.home-designing.com/wp-content/uploads/2010/04/6-beautiful-white-bedroom.jpg"
               location="An Open House In Ajah" 
               title="Open House" 
               description = "3 guest . 3 bedroom . 3 beds . 3 shared bathroom . wifi . kitchen . Free Parking . Washing Machine" 
               star ={4.8}
               price ="$110/night" 
               total = "$100 total"
            />
        </div>
    )
}

export default SearchPage
