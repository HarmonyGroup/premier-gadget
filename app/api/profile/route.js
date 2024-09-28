import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/Users";
import { mongooseConnect } from "@/lib/mongoose";

export const PUT = async (req) => {
    await mongooseConnect();
    const data = await req.json();
    const { fullName, email, phone, billingAddress, city, state } = data;

    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    user.fullName = fullName || user.fullName;
    user.phone = phone || user.phone;
    user.billingAddress = billingAddress || user.billingAddress;
    user.city = city || user.city;
    user.state = state || user.state;

    await user.save();

    return new Response(JSON.stringify({ message: "User updated successfully" }), { status: 200 });
};
