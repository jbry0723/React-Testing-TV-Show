import React from 'react';
import {render, screen, wait} from "@testing-library/react";
import Episodes from './Episodes'
import userEvent from '@testing-library/user-event';


const episodes=[{
airdate: "2016-07-15",
airstamp: "2016-07-15T12:00:00+00:00",
airtime: "",
id: 578663,
image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"},
name: "Chapter Two: The Weirdo on Maple Street",
number: 2,
runtime: 60,
season: 1,
summary: "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
type: "regular",
url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",


}]

test('renders without errors', ()=>{
    render(<Episodes episodes={episodes}/>);
});
