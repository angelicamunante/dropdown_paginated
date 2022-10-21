import { getFirestore, getDocs, query, orderBy, where, collection } from 'firebase/firestore';

const getCompanies = async (search) => {
  const db = getFirestore();
  const ref = collection(db, "companies");
  let querySnapshot;
  if (search) {
    querySnapshot = query(ref, orderBy('code'), where("code", ">=", search), where("code", "<=", search + '\uf8ff'));
  } else {
    querySnapshot = query(ref, orderBy('code'));
  }

  const firebaseDocs = await getDocs(querySnapshot);
  const companies = firebaseDocs.docs.map((doc) => {
    const company = doc.data();
    return { value: doc.id, label: `${company.code} - ${company.name}`};
  })

  return companies;
}

const sleep = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const loadOptions = async (search, prevOptions) => {
  const defaultValue = { value: 0, label: `Agregar nuevo` }
  await sleep(1000);

  let filteredOptions = await getCompanies(search);

  const hasMore = filteredOptions.length > prevOptions.length + 20;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 20
  );
  
  if (prevOptions.length === 0) {
    slicedOptions.unshift(defaultValue) 
  }

  return {
    options: slicedOptions,
    hasMore
  };
};

export default loadOptions;
