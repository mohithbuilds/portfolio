export interface Heading {
	id: string;
	text: string;
	level: number;
}

/**
 * Extracts H2 and H3 headings from a string of HTML content.
 * @param content The HTML content of the blog post.
 * @returns An array of heading objects.
 */
export function extractHeadings(content: string): Heading[] {
	const headings: Heading[] = [];
	const headingRegex = /<h([2-3]) id="([^"]+)">([^<]+)<\/h[2-3]>/g;
	let match;

	while ((match = headingRegex.exec(content)) !== null) {
		headings.push({
			level: parseInt(match[1], 10),
			id: match[2],
			text: match[3].trim(),
		});
	}

	return headings;
}
