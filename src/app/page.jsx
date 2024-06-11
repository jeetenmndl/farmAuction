
export default function Home() {
  return (
   <main>
      Home page
      <div class="card bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div class="card-header">
            <h2 class="card-title text-2xl font-bold mb-4">F.P. Journe</h2>
            <p class="card-description text-gray-700 mb-4">Kokies Vinyl Toy Collectives featuring Francois Paul Journe, Circa 2022</p>
        </div>
        <div class="badge bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">No reserve</div>
        <div class="card-content text-gray-700 my-4">
            <div class="flex items-center justify-between">
                <span class="font-semibold">Lot closes</span>
                <span>04:31:36</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="font-semibold">June 11, 07:46 PM +0545</span>
            </div>
        </div>
        <div class="card-content text-gray-700 my-4">
            <div class="flex items-center justify-between">
                <span class="font-semibold">Estimate</span>
                <span>5,000 - 8,000 USD</span>
            </div>
        </div>
        <div class="card-content text-gray-700 my-4">
            <div class="flex items-center justify-between">
                <span class="font-semibold">Current Bid</span>
                <span class="text-xl font-bold">1,800 USD</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="font-semibold">19 Bids</span>
                <span class="font-semibold">No reserve</span>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Register to Bid</button>
        </div>
    </div>
   </main>
  );
}
