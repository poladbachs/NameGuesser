const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
}

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
}


interface Params {
  params: { name: string };
}


export default async function Page({ params }: Params) {

    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [gender, country] = await Promise.all([
      genderData,
      countryData
    ]);
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> 
        { params.name }
      </main>
    );
  }  