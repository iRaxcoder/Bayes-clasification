import axios from "axios";

var BASE_URL= "http://localhost:4000/";

const exercise = {
    getLearningStyle: async (data) => {
        //loading.style.display="block";
        const response = await axios.post(BASE_URL+"learning-style", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    },
    getOriginPlace: async (data) => {
        //loading.style.display="block";
        const response = await axios.post(BASE_URL+"origin-place", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    },
    getStudentSex: async (data) => {
        //loading.style.display="block";
        const response = await axios.post(BASE_URL+"student-sex", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    },
    getGuessStyle: async (data) => {
        //loading.style.display="block";
        const response = await axios.post(BASE_URL+"guess-style", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    },
    getProfessorType: async (data) => {
        //loading.style.display="block";
        const response = await axios.post(BASE_URL+"professor-type", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    },
    getClassType: async (data) => {
        //loading.style.display="block";
        const response = await axios.post(BASE_URL+"network-class", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    }
}
export default exercise;