// import { user } from "@/util/db";
// import { NextResponse } from "next/server";


// export async function GET(request, content){

//     const userData = user.filter((item) => item.id == content.params.id)

//     return NextResponse.json(
//         userData.length == 0 ? {result: 'No Data Found', success: false} : {result: userData, success: true}, 
//         {status: 200})
// }  





import { user } from "@/util/db"; // Assuming user data is in "@/util/db"
import { NextResponse } from "next/server";

export async function GET(request, response) {
  const { id } = request.query; // Access dynamic parameter directly

  try {
    const foundUser = user.find(item => item.id === id); // Improved filtering

    if (foundUser) {
      return NextResponse.json({ result: foundUser, success: true }, { status: 200 });
    } else {
      return NextResponse.json({ result: 'No Data Found', success: false }, { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ result: 'Internal server error', success: false }, { status: 500 });
  }
}
