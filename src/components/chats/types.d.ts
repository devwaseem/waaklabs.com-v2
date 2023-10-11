import type { ImageMetadata } from "astro";
import type { HTMLAttributes } from "astro/types";

export interface ChatSessionType {
    timeAgo?: string;
    sections: ChatSectionType[];
}

export interface ChatAuthorType {
    image: ImageMetadata;
    name: string;
    side: "left" | "right";
}

export interface ChatSectionType {
    author: ChatAuthorType;
    messages: ChatMessageType[];
}

interface ChatBubbleProjectType {
    name: string;
    description: string;
    link?: string;
    tags?: string[];
    images?: ImageMetadata[];
}
interface ChatBubbleSocialType {
    icon: ImageMetadata;
    name: string;
    link: string;
}

export interface ChatMessageType {
    type:
        | "text"
        | "link"
        | "image"
        | "pricing"
        | "project"
        | "text-html"
        | "real-chat"
        | "social-link"
        | "calendly";
    html?: HTMLAttributes;
    text?: string;
    link?: ChatMessageLinkType;
    project?: ChatBubbleProjectType;
    social?: ChatBubbleSocialType;
}
