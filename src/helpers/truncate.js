export default function truncate(text, options = {}) {
    const truncateAt = options.truncateAt ? options.truncateAt : 45;

    if (text.length < truncateAt) {
      return text
    }
    
    const omission = options.omission ? options.omission : " ";
    
    const length_with_room_for_omission = truncateAt - omission.length
    
    let stop;
    if (options.separator && [...text].lastIndexOf(options.separator, length_with_room_for_omission) != -1) {
        stop = [...text].lastIndexOf(options.separator, length_with_room_for_omission)
    } else {
        stop = length_with_room_for_omission
    }

    // Will remove html tags but is not a secure html sanitizer for untrusted input
    return text.substring(0, stop).replace(/<\/?[^>]+(>|$)/g, "") + omission;
}