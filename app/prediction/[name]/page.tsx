const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
}


interface Params {
  params: { name: string };
}


export default async function Page({ params }: Params) {
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> 
        { params.name }
      </main>
    );
  }  