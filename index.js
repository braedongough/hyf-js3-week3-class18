// Creating a CV class
function generateId() {
    return Math.floor(Math.random() * 10000)
}

class Job {
    constructor(title, description, startDate, endDate) {
        this.id = generateId()
        this.title = title
        this.description = description
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
    }
}

class Education {
    constructor(title, school, address, startDate, endDate) {
        this.id = generateId()
        this.title = title
        this.school = school
        this.address = address
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
    }
}

class CV {
    constructor(email) {
        this.jobs = []
        this.educations = []
        this.email = email
    }

    addJob(job) {
        this.jobs.push(job)
    }

    removeJob(job) {
        const updatedJobs = this.jobs.filter((it) => job.id !== it.id)
        this.jobs = updatedJobs
    }

    addEducation(education) {
        this.educations.push(education)
    }

    removeEducation(education) {
        const updatedEducations = this.educations.filter(
            // (it) => education.id !== it.id
            (it) => _.isEqual(education, it)
        )
        this.educations = updatedEducations
    }
}

const edu1 = new Education(
    'Undergrad',
    'Brock University',
    '123 Niagara falls',
    '2021-02-03',
    '2022-01-01'
)

const cv = new CV('br@email.com')

cv.addEducation(edu1)

console.log(cv.educations)
cv.removeEducation(edu1)
console.log(cv.educations)
