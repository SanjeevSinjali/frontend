import {
  Home,
  Settings,
  User2,
  ChevronUp,
  BriefcaseBusiness,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import logo from "@/assets/images/logo/logo-base-1200x1200.png";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Add Job",
    url: "/create-job",
    icon: BriefcaseBusiness,
  },
  {
    title: "All Applicants",
    url: "#",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/profile",
    icon: Settings,
  },
];
import { useNavigate } from "react-router-dom";

function AppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col justify-center mx-2 items-center mb-4">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <Label className="text-xl font-bold">JobPros</Label>
          </div>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Button
                    variant={"destructive"}
                    className="w-full"
                    onClick={() => {
                      localStorage.removeItem("access_token");
                      localStorage.removeItem("refresh_token");
                      navigate("/login");
                    }}
                  >
                    Log out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
