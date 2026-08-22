"use client";

import { useState } from "react";
import { Play, Star, Users, CheckCircle, ExternalLink, Download, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AppTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  version: string;
  size: string;
  installTime: number;
  rating: number;
  reviews: number;
  downloads: number;
  tags: string[];
  features: string[];
  requirements: string[];
  demoUrl?: string;
  documentationUrl?: string;
}

interface AppCardProps {
  app: AppTemplate;
  onSelect?: (app: AppTemplate) => void;
  isSelected?: boolean;
}

export function AppCard({ app, onSelect, isSelected }: AppCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`group relative overflow-hidden transition-all ${
        isSelected
          ? "ring-2 ring-cyan-500 bg-cyan-500/5"
          : "hover:bg-white/5"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(app)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="pb-3 relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isSelected ? "bg-cyan-500/20" : "bg-white/10"
            }`}>
              <span className="text-xl">{app.icon}</span>
            </div>
            <div>
              <CardTitle className="text-lg">{app.name}</CardTitle>
              <CardDescription className="text-xs">
                {app.version} • {app.size}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">{app.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({app.reviews})
            </span>
          </div>
        </div>

        <Badge variant="secondary" className="w-fit text-xs">
          {app.category}
        </Badge>
      </CardHeader>

      <CardContent className="pt-0 relative">
        <p className="text-sm text-muted-foreground mb-4">
          {app.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{app.downloads.toLocaleString()} installs</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{app.installTime}s install</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {app.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {app.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{app.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="relative">
        <div className="flex items-center gap-2">
          <Button size="sm" className={`flex-1 ${
            isSelected
              ? "bg-cyan-500 hover:bg-cyan-600"
              : "bg-white/10 hover:bg-white/20"
          }`}>
            {isSelected ? (
              <CheckCircle className="h-4 w-4 mr-1" />
            ) : (
              <Play className="h-4 w-4 mr-1" />
            )}
            {isSelected ? "Đã chọn" : "Cài đặt"}
          </Button>
          {isHovered && (
            <>
              {app.demoUrl && (
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              )}
              <Button size="sm" variant="outline">
                <Download className="h-3 w-3" />
              </Button>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}