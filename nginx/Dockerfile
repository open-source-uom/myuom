FROM nginx:1.25.3

# Add a non-root user
RUN addgroup nginxgroup && adduser -G nginxgroup -D nginxuser
USER nginxuser

# Add a HEALTHCHECK instruction
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost/ || exit 1

# Copy nginx default config
COPY default.conf /etc/nginx/conf.d/default.conf