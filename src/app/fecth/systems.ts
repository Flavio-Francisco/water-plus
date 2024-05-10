import { Systems } from "@/utils/models/analysis";
import axios from "axios";
import { NextResponse } from "next/server";



export async function getSystems() {
    try {
        const data = await axios.get("api/systems")
        const systems: Systems[] = data.data;
        return systems
    } catch (error) {
        return  NextResponse.json({
            message:"dados não encontados"
        },
            {
            status:500
        })
    }
}