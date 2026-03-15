"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { Post } from "@/app/types";
import { Badge } from "@/app/shadcn/components/ui/badge";
import { formatDate } from "@/app/lib/utils";
import {
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/shadcn/components/ui/card";
import { BaseCard } from "./BaseCard";

interface PostCardProps {
  post: Post;
}

const categoryLabels: Record<Post["category"], string> = {
  guide: "Guide",
  review: "Review",
  news: "News",
  "smart-home": "Smart Home",
  lifestyle: "Lifestyle",
};

export function PostCard({ post }: PostCardProps) {
  const {
    slug,
    title,
    previewText,
    coverImage,
    category,
    author,
    publishedAt,
    readingTime,
  } = post;

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <BaseCard className="relative h-full  border-none pt-0">
        {/* Image Wrapper */}
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 480px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay Badge */}
          <div className="absolute left-4 top-4 z-10">
            <Badge variant="post">{categoryLabels[category]}</Badge>
          </div>
        </div>

        <CardHeader>
          <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground/80">
            <div className="flex items-center gap-1">
              <Clock className="size-3" />
              <span>{readingTime} min read</span>
            </div>
            <span>&bull;</span>
            <span>{formatDate(publishedAt)}</span>
          </div>

          <h3 className="line-clamp-2 text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {previewText}
          </p>
        </CardContent>

        <CardFooter className="flex justify-between">
          {/* Author & CTA */}
          <div className="flex items-center gap-3">
            {author.avatar ? (
              <div className="relative size-9 overflow-hidden rounded-full bg-secondary ring-2 ring-background shadow-sm">
                <Image
                  src={author.avatar}
                  alt={`${author.name} — ${author.role}`}
                  fill
                  sizes="36px"
                  className="object-cover "
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                {author.name.charAt(0)}
              </div>
            )}

            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">
                {author.name}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {author.role}
              </span>
            </div>
          </div>

          <div className="flex size-8 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </div>
        </CardFooter>
      </BaseCard>
    </Link>
  );
}
