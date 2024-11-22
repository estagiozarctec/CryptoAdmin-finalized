"use client";

import { useEffect, useState } from "react";
import { IconDots } from "@/components/icons/Icones";

export default function Contacts() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("http://localhost:3001/recentContacts");
        if (!response.ok) {
          throw new Error("Erro ao carregar os contatos");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setContacts(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <section className="flex flex-col gap-6 bg-white p-6">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-xl font-semibold">Contacts</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ipsum dolor sit amet consectetur
          </span>
        </div>
        <div>
          <button className="bg-[#6418C3] text-white text-sm font-medium px-8 py-4">
            Invite Friends
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact.id} className="flex justify-between items-center">
              <div className="flex items-center gap-2 w-1/2">
                <img
                  src={contact.profile || "/placeholder-image.png"}
                  alt={``}
                  className="w-12 h-12 bg-[#C4C4C4]"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{contact.name}</span>
                  <span className="text-xs text-[#969BA0]">@{contact.at}</span>
                </div>
              </div>
              <div className="flex gap-2 w-1/2">
                <div className="flex gap-4 w-full">
                  <button className="w-1/2 border-2 font-medium text-sm text-[#6418C3] border-[#6418C3] hover:bg-[#6418C3] hover:text-white py-2 transition-colors">
                    TRANSFER
                  </button>
                  <button
                    className={`w-1/2 font-medium text-sm py-2 transition-colors ${
                      contact.followed
                        ? "bg-[#C4C4C4] hover:bg-[#939393] text-white"
                        : "bg-[#6418C3] hover:bg-[#181bc3] text-white"
                    }`}
                  >
                    {contact.followed ? "UNFOLLOW" : "FOLLOW"}
                  </button>
                </div>
                <button>
                  <IconDots />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-4">
            {[...Array(11)].map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-2 w-1/2">
                  <div className="w-12 h-12 bg-zinc-700"></div>
                  <div className="flex flex-col gap-1">
                    <div className="w-24 h-4 bg-zinc-600 rounded"></div>
                    <div className="w-16 h-3 bg-zinc-400 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-2 w-1/2">
                  <div className="w-1/2 h-8 bg-zinc-400 rounded"></div>
                  <div className="w-1/2 h-8 bg-zinc-600 rounded"></div>
                  <div className="flex flex-col justify-center">
                    <div className="w-1 h-6 bg-zinc-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
