"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function HandleProtocol() {
  const searchParams = useSearchParams();
  const protocol = searchParams.get("protocol");

  useEffect(() => {
    if (protocol) {
      console.log("Handling protocol:", protocol);
      try {
        const url = new URL(protocol);
        console.log("Protocol host:", url.host);
        console.log("Protocol pathname:", url.pathname);
        console.log("Protocol search params:", url.searchParams);

        // Redirect to appropriate page based on protocol
        if (url.pathname === "/component") {
          const componentName = url.searchParams.get("name");
          if (componentName) {
            window.location.href = `/components/${componentName}`;
          }
        }
      } catch (error) {
        console.error("Invalid protocol format:", error);
      }
    }
  }, [protocol]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Protocol Handler</h1>
        {protocol ? (
          <div>
            <p>
              Handling protocol: <code>{protocol}</code>
            </p>
            <p className="mt-2 text-gray-600">Redirecting...</p>
          </div>
        ) : (
          <p>No protocol specified</p>
        )}
      </div>
    </div>
  );
}
