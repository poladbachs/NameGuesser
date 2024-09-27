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
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">
            Personal Info
          </div>
          <div>Name: {params.name}</div>
          <div>Gender: {gender?.gender}</div>
          <div>Country: {country?.country[0].country_id} {}</div>
          <div>Occurencies: {gender?.count}</div>
        </div>
      </div>
    );
  }  