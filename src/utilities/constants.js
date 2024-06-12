const constants = {
  appwriteEndpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_DATABASE_ID,
  productsCollectionId: import.meta.env.VITE_PRODUCTS_COLLECTION_ID,
  imgBucketId: import.meta.env.VITE_IMG_BUCKET_ID,
};

export default constants;
