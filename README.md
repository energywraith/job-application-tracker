# Job Application tracker

Looking for a job can be really problematic when you apply to several companies at once. I tried to create an excel sheet that would help me with this, but it also got confusing after a while. So why not create an application that would help us with this?

The API for the project is implemented in [another repo](https://github.com/nekiro/job-application-tracker) by a back-end developer :)

The app is deployed at the link: [jobtracker.pl](https://jobtracker.pl/), feel free to use it and leave feedback!

## Run the project locally

First clone the repository:
```bash
git clone https://github.com/energywraith/job-application-tracker.git
```

Install dependencies:
```bash
npm install
```

Adjust .env located at root of the project and then run local development server
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

## Things to do in the future:

* Reminders to follow up after a certain amount of time (e.g. 1 week after interview).

* Email templates that dynamically change the company name.

* Analytics Page. See how may applications you've sent within a given period. Response rate.
    
* Opinions about companies, maybe being fetched from gowork
