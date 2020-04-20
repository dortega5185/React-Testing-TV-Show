import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

// mock the fetchShow function
jest.mock("./api/fetchShow");
const firstSeasonData = {
  data: [
    {
      _embedded: {
        episodes: [
          {
            id: 553946,
            name: "Chapter One: The Vanishing of Will Byers",
            season: 1,
            number: 1,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
            },
            summary:
              "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          },
          {
            id: 578663,
            name: "Chapter Two: The Weirdo on Maple Street",
            season: 1,
            number: 2,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
            },
            summary:
              "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
          },
          {
            id: 578664,
            name: "Chapter Three: Holly, Jolly",
            season: 1,
            number: 3,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
            },
            summary:
              "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
          },
          {
            id: 578665,
            name: "Chapter Four: The Body",
            season: 1,
            number: 4,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg",
            },
            summary:
              "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
          },
          {
            id: 578666,
            name: "Chapter Five: The Flea and the Acrobat",
            season: 1,
            number: 5,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg",
            },
            summary:
              "<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
          },
          {
            id: 578667,
            name: "Chapter Six: The Monster",
            season: 1,
            number: 6,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168923.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168923.jpg",
            },
            summary:
              "<p>Jonathan manages to pull Nancy back to the real world from the Upside Down. Meanwhile, Lucas refuses to help with the search for Jane and goes to Hawkins Labs on his own, while Dustin and Mike look for the missing girl.</p>",
          },
          {
            id: 578668,
            name: "Chapter Seven: The Bathtub",
            season: 1,
            number: 7,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg",
            },
            summary:
              "<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
          },
          {
            id: 578669,
            name: "Chapter Eight: The Upside Down",
            season: 1,
            number: 8,
            runtime: 60,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg",
              original:
                "http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg",
            },
            summary:
              "<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>",
          },
        ],
      },
    },
  ],
};
// async/await
test("renders show data when Get ", async () => {
  mockFetchShow.mockResolvedValueOnce(firstSeasonData);
  const { getByText, queryAllByTestId } = render(<App />);
  const button = getByText(/select a season/i);
  userEvent.click(button);
  await waitFor(() => expect(queryAllByTestId(/episodes/i)).toHaveLength(2));
});
