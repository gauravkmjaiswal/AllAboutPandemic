import mongoose from 'mongoose';

const Connection = async (URL) => {
    // const URL = `mongodb+srv://user:codeforinterview@allaboutpendemic.asqmc.mongodb.net/AllAboutPendemic?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;