try{
    riskyFunction();
} catch(error){
    console.error("an error occurred: ",error.message);
} finally{
    console.log("Cleanup code can go here.");
}

    throw new Error("this is an error")