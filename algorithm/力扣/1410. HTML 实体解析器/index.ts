function entityParser(text: string): string {
  return text.replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/, '<')
    .replace(/&frasl;/g, '/')
};





console.log(entityParser('&amp; is an HTML entity but &ambassador; is not.'));


//2 使用栈结构