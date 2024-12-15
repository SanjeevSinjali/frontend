import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import EditJobForm from "./EditJobForm";

const AllJobsTable = () => {
  const [jobs, setJobs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")) || 1;

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/jobs/?posted_by=${user}`
      );
      const data = await response.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <Card className="w-full p-4">
      <CardTitle className="p-6 text-2xl font-bold">All Jobs</CardTitle>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Total Applicants</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => {
              return (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.company}</TableCell>
                  <TableCell>
                    <Badge>{job.title}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="rounded-full">
                      {/* {job.applicants.length} */}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Dialog>
                      <DialogTrigger>
                        <Button>Edit</Button>
                      </DialogTrigger>
                      <DialogContent className="h-full overflow-scroll no-scrollbar">
                        <EditJobForm />
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger>
                        <Button variant={"destructive"}>Delete</Button>{" "}
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your the job and remove your data from our
                            servers.
                          </DialogDescription>
                          <div className="flex gap-2 justify-end">
                            <Button variant={"destructive"}>Delete</Button>
                            <DialogClose asChild>
                              <Button variant={"outline"}>Cancel</Button>
                            </DialogClose>
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    {/* <Button variant={"destructive"}>Delete</Button> */}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AllJobsTable;
