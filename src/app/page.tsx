"use client"
import Image from 'next/image'
import { ConnectWallet } from "@thirdweb-dev/react";
export default function Home() {
    return (
        <div>
            <ConnectWallet theme="dark" />
        </div>
        )
    }
    