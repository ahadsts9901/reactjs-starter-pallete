export const baseUrl = "http://localhost:5002"

export const usernamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,30}$/;
export const emailPattern = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s{2})[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,24}$/;
export const phoneNumberPattern = /^03\d{9}$/
export const addressPattern = /^.{2,1000}$/
export const cnicPattern = /^\d{13}/

export const userStatusOptions = ["ACTIVE", "DISABLED"]
export const rolesEnum = ["SUPER_ADMIN", "ADMIN"]
export const profilePictureSizeLimit = 20000000 // 1_mb

export const webUrl = "https://technetcloud.co"
export const profilePicture = "https://res.cloudinary.com/do6sd9nyx/image/upload/v1706343891/we-app-nextjs/Assets/profile-picture_ufgahm.png"

export const cloudinaryProfilePicturesFolder = "erp-tnc/profile-pictures"

export const paginationRowsPerPageData = [10, 20, 30, 40, 50]
export const authorizationObj = { withCredentials: true }
