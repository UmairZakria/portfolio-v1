import connectMongo from "@/lib/mongodb";
import Message from "@/app/models/Message";

// Handle GET request
export async function GET(request) {
  await connectMongo();

  const data = await Message.find({});
  if (!data) {
    return new Response(JSON.stringify({ message: "Message box is empty" }), {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return new Response(JSON.stringify({ data: data }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

// Handle POST request
export async function POST(request) {
  try {
    const { fname, lname, email, budget, discription } = await request.json();
    await connectMongo();
    const mesage = new Message({ fname, lname, email, budget, discription });
    await mesage.save();

    return new Response(JSON.stringify({ status: "success" }), {
      status: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "error", err: error }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

// Handle DELETE request
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required" }), {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    await connectMongo();
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return new Response(JSON.stringify({ message: "Message not found" }), {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(JSON.stringify({ status: "success", deletedMessage }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "error", error }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

// Handle preflight OPTIONS request (required for CORS)
export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
