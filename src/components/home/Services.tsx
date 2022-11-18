import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  paragraph: string;
  price?: number;
  image?: string;
  services?: string[];
}

const Services = () => {
  const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    paragraph,
    price,
    image = "/images/web-dev.jpg",
    services,
  }) => {
    return (
      <div className="flex flex-col items-start justify-start w-full bg-white shadow-2xl rounded-lg">
        <div className="relative w-full h-24 rounded-t-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg w-full h-full"
            draggable={false}
          />

          <div className="w-full h-full bg-transparent-300 absolute top-0 left-0 p-1 flex items-end justify-start rounded-t-lg">
            <h4 className="text-white z-10">
              {title}{" "}
              {price ? (
                <span className="text-sm font-normal">
                  (sākot no {price}
                  {"€"}‎)
                </span>
              ) : (
                <span className="text-sm font-normal">(bezmaksas)</span>
              )}
            </h4>
          </div>
        </div>

        <div className="p-2">
          <strong>{paragraph}</strong>

          <p className="mt-2">{price ? "Cenā iekļauts" : "Pieejams"}:</p>

          <ul className="list-disc list-inside">
            {services?.map((ser, i) => (
              <li key={i}>{ser}</li>
            ))}
          </ul>

          {title !== "Bezmaksas hostings" ? (
            <strong>+ Bezmaksas hostings</strong>
          ) : (
            <p className="">
              Neesat drošs vai Jūsu lapa atbilst bezmaksas hostingam?
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[900px] flex items-start justify-start flex-col">
        <h3>Mūsu pakalpojumi</h3>

        <div className="w-full grid grid-cols-3 mt-4 gap-2">
          <ServiceCard
            title="Mājaslapu izstrāde"
            paragraph="Modernu mājaslapu izstrāde pēc individuāla dizaina un funkcionalitātes"
            price={100}
            image="/images/web-dev.jpg"
            services={[
              "Dizaina izveidošana",
              "Mājaslapas izstrāde",
              "Mobile responsive dizains",
              "SSL sertifikāts",
            ]}
          />

          <ServiceCard
            title="E-veikalu izstrāde"
            paragraph="Jaudīgu internetveikalu izstrāde pēc individuāla dizaina"
            price={600}
            image="/images/web-dev.jpg"
            services={[
              "Dizaina izveidošana",
              "Veikala izstrāde",
              "Maksājumu sistēmas integrācija",
              "Mobile responsive dizains",
              "SSL sertifikāts",
            ]}
          />

          <ServiceCard
            title="Bezmaksas hostings"
            paragraph="Mājaslapu hostings + SSL sertfikāts"
            image="/images/web-dev.jpg"
            services={[
              "HTML5 lapām",
              "React.JS lapām",
              "Next.JS lapām",
              "Vue.JS lapām",
              "Remix.JS lapām",
              "Nuxt.JS lapām",
              "Sveltekit lapām",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
