import Api from "../config/axiosConfig";

export const get=(id)=>{
    id=id || '';
    return Api.get(`events/${id}`)

}

export const add = (body) => {
    return Api.post(`events`,body)
}
export const update = (id, body) => {
    return Api.put(`events/${id}`, body); 
}

export const deleteEvent = async (eventId) => {
    try {
        await Api.delete(`events/${eventId}`);
        console.log("Event deleted successfully");
    } catch (error) {
        console.error("Error deleting event:", error);
        throw error;
    }

}


