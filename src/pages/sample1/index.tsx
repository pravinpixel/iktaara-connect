// page.tsx
import { Button } from "@/components/ui/button"; // Adjust import path
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-x-4">
      {/* Back button */}
      <Button variant="default">
        <span className="inline-block transform rotate-180">&larr;</span>{" "}
        {/* Back arrow */}
      </Button>

      {/* Primary button */}
      <Button variant="default">Primary</Button>

      {/* Secondary button */}
      <Button variant="secondary">Secondary</Button>
      <div className="grid grid-cols-3 divide-x">
        {" "}
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
