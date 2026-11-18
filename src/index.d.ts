// Generated from openapi.json by `yarn generate`. Do not edit.

/**
 * 200
 */
export type V1AccountListResponse = {
  /**
   * Unique ID of the account that owns the API key.
   */
  id: string;
  /**
   * Email address of the account.
   */
  email: (string) | null;
  /**
   * Subscription tier in effect for the account. `free` if there is no active subscription, including while a subscription is `past_due`.
   */
  tier: "free" | "creator" | "pro" | "business";
  /**
   * Credits currently available to spend. Includes subscription credits and any purchased credit packs.
   */
  credits: number;
  /**
   * Details of the account's subscription plan. `null` if the account has no subscription, e.g. a free account, an account that only purchased credit packs, or an account on usage-based API pricing.
   *
   * Reflects the plan currently configured on the subscription. If a plan change is scheduled, `tier` stays on the current plan until the next payment succeeds, so `tier` and `name` can briefly disagree.
   */
  subscription: ({
    /**
     * Name of the current subscription plan, e.g. `Creator`, `Pro`, `Pro Plus`, `Business`. `null` if the plan cannot be determined. Use `tier` for a machine-readable value.
     */
    name: (string) | null;
    /**
     * Status of the subscription.
     * - `active`: payments are up to date.
     * - `past_due`: the latest payment failed. `tier` is `free` until payment succeeds. The subscription is canceled if payment keeps failing.
     */
    status: "active" | "past_due";
    price: {
      /**
       * Price charged per billing interval, in the smallest unit of the currency (e.g. 4900 is $49.00 for `usd`). Discounts are not applied.
       */
      amount: number;
      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;
    };
    /**
     * Discount applied to the subscription. `null` if no discount is applied.
     */
    discount: ({
      /**
       * Percentage taken off `price.amount` each billing interval. `null` if the discount is a fixed amount.
       */
      percent_off: (number) | null;
      /**
       * Fixed amount taken off `price.amount` each billing interval, in the smallest unit of the currency. `null` if the discount is a percentage.
       */
      amount_off: (number) | null;
    }) | null;
    /**
     * How often the subscription is billed. `null` if unknown.
     */
    billing_interval: ("month" | "year" | null) | null;
    /**
     * End of the current billing period, in ISO 8601 format. The subscription renews at this time, or ends if `cancel_at_period_end` is `true`.
     */
    current_period_end: (string) | null;
    /**
     * Whether the subscription is scheduled to end at `current_period_end` instead of renewing. The subscription stays usable until then.
     */
    cancel_at_period_end: boolean;
  }) | null;
};

/**
 * Unauthorized
 */
export type V1AccountListResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AccountListResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1SavedItemsListParams = {
  /**
   * Only return saved items of this type.
   */
  type?: "character" | "reference" | "voice" | "moodboard" | "brand_kit";
  /**
   * Maximum number of saved items to return. Defaults to 20.
   */
  limit?: number;
  /**
   * Opaque pagination cursor from the previous response's next_cursor.
   */
  cursor?: string;
};

/**
 * 200
 */
export type V1SavedItemsListResponse = {
  items: ({
    /**
     * Unique ID of the saved item.
     */
    id: string;
    /**
     * Saved item type.
     */
    type: "character" | "reference" | "voice" | "moodboard" | "brand_kit";
    /**
     * User-provided name of the saved item.
     */
    name: (string) | null;
    assets: ({
      /**
       * Durable asset path. Pass it to a compatible API asset field without uploading it again.
       */
      file_path: string;
      /**
       * Media type of the asset.
       */
      media_kind: "IMAGE" | "VIDEO" | "AUDIO";
      /**
       * Whether this asset is the saved item's primary asset.
       */
      is_primary: boolean;
      /**
       * Signed URL for previewing or downloading the asset. Expires after 24 hours.
       */
      url: string;
      /**
       * When the signed URL expires. The saved asset and file_path do not expire.
       */
      url_expires_at: string;
    })[];
  })[];
  /**
   * Cursor for the next page, or null when there are no more saved items.
   */
  next_cursor: (string) | null;
};

/**
 * Invalid Request
 */
export type V1SavedItemsListResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1SavedItemsListResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1SavedItemsListResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1VoicesListParams = {
  /**
   * Maximum number of voices to return. Defaults to 20.
   */
  limit?: number;
  /**
   * Opaque pagination cursor from the previous response's next_cursor.
   */
  cursor?: string;
};

/**
 * 200
 */
export type V1VoicesListResponse = {
  voices: ({
    /**
     * Unique ID of the voice. Pass it as `style.voice_name` when generating speech. Names are not unique, so use the ID.
     */
    id: string;
    /**
     * Display name of the voice.
     */
    name: string;
    /**
     * URL of the voice's avatar image, or null when the voice has no avatar.
     */
    avatar_url: (string) | null;
    /**
     * URL of an audio sample of the voice.
     */
    preview_url: string;
  })[];
  /**
   * Cursor for the next page, or null when there are no more voices.
   */
  next_cursor: (string) | null;
};

/**
 * Invalid Request
 */
export type V1VoicesListResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1VoicesListResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1VoicesListResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1FilesUploadUrlsCreateBody = {
  /**
   * The list of assets to upload. The response array will match the order of items in the request body.
   */
  items: ({
    /**
     * The type of asset to upload. Possible types are video, audio, image
     */
    type: "video" | "audio" | "image";
    /**
     * The extension of the file to upload. Do not include the dot (.) before the extension. Possible extensions are mp4,m4v,mov,webm,mp3,wav,aac,flac,webm,weba,m4a,opus,ogg,oga,aiff,amr,png,jpg,jpeg,jpe,jfif,heic,heif,webp,avif,jp2,tiff,tif,bmp,gif,webp,webm
     */
    extension: string;
  })[];
};

/**
 * Success
 */
export type V1FilesUploadUrlsCreateResponse = {
  /**
   * The list of upload URLs and file paths for the assets. The response array will match the order of items in the request body. Refer to the [Input Files Guide](https://docs.magichour.ai/integration/inputs-and-outputs) for more details.
   */
  items: ({
    /**
     * Used to upload the file to storage, send a PUT request with the file as data to upload.
     */
    upload_url: string;
    /**
     * when the upload url expires, and will need to request a new one.
     */
    expires_at: string;
    /**
     * this value is used in APIs that needs assets, such as image_file_path, video_file_path, and audio_file_path
     */
    file_path: string;
  })[];
};

/**
 * Invalid Request
 */
export type V1FilesUploadUrlsCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1FilesUploadUrlsCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1FilesUploadUrlsCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1FilesUploadUrlsCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1FilesUploadUrlsCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1FilesUploadUrlsCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1FaceDetectionGetParams = {
  /**
   * The id of the task. This value is returned by the [face detection API](https://docs.magichour.ai/api-reference/files/face-detection#response-id).
   */
  id: string;
};

/**
 * 200
 */
export type V1FaceDetectionGetResponse = {
  /**
   * The id of the task. This value is returned by the [face detection API](https://docs.magichour.ai/api-reference/files/face-detection#response-id).
   */
  id: string;
  /**
   * The credits charged for the task.
   */
  credits_charged: number;
  /**
   * The status of the detection.
   */
  status: "queued" | "rendering" | "complete" | "error";
  /**
   * The faces detected in the image or video. The list is populated as faces are detected.
   */
  faces: ({
    /**
     * The path to the face image. This should be used in face swap photo/video API calls as `.assets.face_mappings.original_face`
     */
    path: string;
    /**
     * The url to the face image. This is used to render the image in your applications.
     */
    url: string;
  })[];
  /**
   * Why the face detection failed. Present only when `status` is `error`; `null` otherwise.
   */
  error: ({
    /**
     * Details on the reason why a failure happened.
     */
    message: string;
    /**
     * An error code to indicate why a failure happened.
     */
    code: string;
  }) | null;
};

/**
 * Invalid Request
 */
export type V1FaceDetectionGetResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1FaceDetectionGetResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1FaceDetectionGetResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1FaceDetectionGetResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1FaceDetectionGetResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1FaceDetectionGetResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1FaceDetectionCreateBody = {
  /**
   * Confidence threshold for filtering detected faces.
   * * Higher values (e.g., 0.9) include only faces detected with high certainty, reducing false positives.
   * * Lower values (e.g., 0.3) include more faces, but may increase the chance of incorrect detections.
   */
  confidence_score?: number;
  /**
   * Provide the assets for face detection
   */
  assets: {
    /**
     * This is the image or video where the face will be detected. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    target_file_path: string;
  };
};

/**
 * 200
 */
export type V1FaceDetectionCreateResponse = {
  /**
   * The id of the task. Use this value in the [get face detection details API](https://docs.magichour.ai/api-reference/files/get-face-detection-details) to get the details of the face detection task.
   */
  id: string;
  /**
   * The credits charged for the task.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1FaceDetectionCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1FaceDetectionCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1FaceDetectionCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1FaceDetectionCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1FaceDetectionCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1FaceDetectionCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1VideoProjectsGetParams = {
  /**
   * Unique ID of the video project. This value is returned by all of the POST APIs that create a video.
   */
  id: string;
};

/**
 * Success
 */
export type V1VideoProjectsGetResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * The name of the video.
   */
  name: (string) | null;
  /**
   * The status of the video.
   *
   * - `draft` - the project was created but has not been submitted for rendering
   * - `queued` - the job is waiting for an available server
   * - `rendering` - the job is being processed; the `video.started` webhook event fires when rendering begins
   * - `complete` - the job finished successfully; fires `video.completed`
   * - `error` - the job failed during processing; fires `video.errored`
   * - `canceled` - the job was manually canceled (for example from the Magic Hour web app)
   *
   * **Note:** `rendering`, `complete`, and `error` have matching webhook events; `canceled` does not - a canceled job emits no webhook event, so poll this endpoint to detect cancellation.
   */
  status: "draft" | "queued" | "rendering" | "complete" | "error" | "canceled";
  /**
   * The type of the video project. Possible values are ANIMATION, AUTO_SUBTITLE, VIDEO_TO_VIDEO, FACE_SWAP, TEXT_TO_VIDEO, IMAGE_TO_VIDEO, LIP_SYNC, TALKING_PHOTO, AVATAR, VIDEO_UPSCALER, VIDEO_EDITOR, CHARACTER_REPLACE, VIDEO_COLORIZER, VIDEO_WATERMARK_REMOVER, VIDEO_COLOR_GRADER, VIDEO_TRANSLATOR, MUSIC_VIDEO, EXTEND, AUDIO_TO_VIDEO, VIDEO_EXPANDER, UGC_AD
   */
  type: string;
  created_at: string;
  /**
   * The width of the final output video. A value of -1 indicates the width can be ignored.
   */
  width: number;
  /**
   * The height of the final output video. A value of -1 indicates the height can be ignored.
   */
  height: number;
  /**
   * Whether this resource is active. If false, it is deleted.
   */
  enabled: boolean;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  total_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
  /**
   * Frame rate of the video. If the status is not 'complete', the frame rate is an estimate and will be adjusted when the video completes.
   */
  fps: number;
  /**
   * In the case of an error, this object will contain the error encountered during video render
   */
  error: ({
    /**
     * Details on the reason why a failure happened.
     */
    message: string;
    /**
     * An error code to indicate why a failure happened.
     */
    code: string;
  }) | null;
  downloads: ({
    url: string;
    expires_at: string;
  })[];
  /**
   * Deprecated: Please use `.downloads` instead. The download url and expiration date of the video project
   * @deprecated
   */
  download: ({
    url: string;
    expires_at: string;
  }) | null;
};

/**
 * Invalid Request
 */
export type V1VideoProjectsGetResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1VideoProjectsGetResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1VideoProjectsGetResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1VideoProjectsGetResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1VideoProjectsGetResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1VideoProjectsDeleteParams = {
  /**
   * Unique ID of the video project. This value is returned by all of the POST APIs that create a video.
   */
  id: string;
};

/**
 * Invalid Request
 */
export type V1VideoProjectsDeleteResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1VideoProjectsDeleteResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1VideoProjectsDeleteResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1VideoProjectsDeleteResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1VideoProjectsDeleteResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1VideoProjectsDeleteResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiTalkingPhotoCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * The start time of the input audio in seconds. Maximum clip length depends on style.generation_mode: realistic 300s, prompted 60s.
   */
  start_seconds: number;
  /**
   * The end time of the input audio in seconds. Maximum clip length depends on style.generation_mode: realistic 300s, prompted 60s.
   */
  end_seconds: number;
  /**
   * Provide the assets for creating a talking photo
   */
  assets: {
    /**
     * The source image to animate. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
    /**
     * The audio file to sync with the image. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    audio_file_path: string;
  };
  /**
   * Attributes used to dictate the style of the output
   */
  style?: {
    /**
     * Controls overall motion style.
     * * `realistic` - Maintains likeness well, high quality, and reliable.
     * * `prompted` - Slightly lower likeness; allows option to prompt scene.
     *
     * **Deprecated values (maintained for backward compatibility):**
     * * `pro` - Deprecated: use `realistic`
     * * `standard` - Deprecated: use `prompted`
     * * `stable` - Deprecated: use `realistic`
     * * `expressive` - Deprecated: use `prompted`
     */
    generation_mode?: "realistic" | "prompted" | "pro" | "standard" | "stable" | "expressive";
    /**
     * Note: this value is only applicable when generation_mode is `expressive`. The value can include up to 2 decimal places.
     * * Lower values yield more stability but can suppress mouth movement.
     * * Higher values increase motion and expressiveness, with a higher risk of distortion.
     * @deprecated
     */
    intensity?: number;
    /**
     * A text prompt to guide the generation. Only applicable when generation_mode is `prompted`.
     * This field is ignored for other modes.
     */
    prompt?: string;
  };
  /**
   * Output preset. Overrides `max_resolution`. Defaults to 480p in prompted mode; realistic mode uses the mapped plan maximum.
   */
  resolution?: "480p" | "720p";
  /**
   * Deprecated: use `resolution`. Still accepted as a larger-dimension cap, limited by your plan. Ignored when `resolution` is provided.
   *
   * After plan capping:
   * * Below 1280 maps to `480p` (intermediate values round down).
   * * 1280 or above maps to `720p`.
   * @deprecated
   */
  max_resolution?: number;
};

/**
 * Success
 */
export type V1AiTalkingPhotoCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiTalkingPhotoCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiTalkingPhotoCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiTalkingPhotoCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiTalkingPhotoCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiTalkingPhotoCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiTalkingPhotoCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiUgcAdCreateBody = {
  assets: {
    /**
     * Prepared image to animate. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
  };
  /**
   * The words the actor should speak. Character limits apply after trimming:
   * * kling-3.0: 2304 characters.
   * * ltx-2.5: 3804 characters.
   * * veo3.1: 2500 characters.
   * LTX and Kling dialogue wrappers count toward their model prompt limit.
   */
  script: string;
  /**
   * Video duration in seconds. Supported values by model:
   * * kling-3.0: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 seconds.
   * * ltx-2.5: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60 seconds.
   * * veo3.1: 4, 6, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141 seconds.
   * Free plans are limited to 5 seconds unless a credit pack has been purchased.
   */
  end_seconds: number;
  /**
   * Defaults to kling-3.0 on paid plans and ltx-2.5 on free plans.
   */
  model?: "kling-3.0" | "ltx-2.5" | "veo3.1";
  /**
   * Defaults to 720p on paid plans and 480p on free plans. Unsupported model/resolution combinations and resolutions unavailable for your plan are rejected.
   */
  resolution?: "480p" | "720p" | "1080p";
};

/**
 * Success
 */
export type V1AiUgcAdCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiUgcAdCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiUgcAdCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiUgcAdCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiUgcAdCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * 422
 */
export type V1AiUgcAdCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiUgcAdCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiVideoEditorCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds?: number;
  /**
   * End time of your clip in seconds. Must be greater than `start_seconds`. Allowed duration depends on model: `gemini-omni-1.2`: 3-15s, `wan-3.0`: 2-15s, `ltx-2.5`: 0.5-60s (30s at 1080p), `kling-4.0`: 3-30s.
   */
  end_seconds: number;
  /**
   * The AI model to use for video editing. Defaults to `ltx-2.5` on free tiers and `gemini-omni-1.2` on paid tiers.
   *
   * * `gemini-omni-1.2`: Best for precise clips up to 15s, references, and high-resolution output. Requires a paid tier.
   * * `wan-3.0`: High-quality video with native audio, long clips, and end-frame control. Requires a paid tier.
   * * `ltx-2.5`: Fastest for general scenes, long clips, audio, and rapid iteration.
   * * `kling-4.0`: Create cinematic videos with image and video references and optional audio. Requires a paid tier.
   */
  model?: "gemini-omni-1.1" | "gemini-omni-1.2" | "wan-3.0" | "ltx-2.5" | "kling-4.0" | "gemini-omni" | "ltx-2.3";
  /**
   * Output resolution. Defaults to `480p` for free tier and `720p` for paid. Supported per model: `gemini-omni-1.2`: 360p, 720p, 1080p, 4k; `wan-3.0`: 480p, 720p, 1080p; `ltx-2.5`: 480p, 720p, 1080p; `kling-4.0`: 720p, 1080p.
   */
  resolution?: "360p" | "480p" | "720p" | "1080p" | "4k";
  style: {
    /**
     * The prompt used to edit the video.
     */
    prompt: string;
  };
  /**
   * Name references without @ and refer to them as @name in style.prompt. Names must be unique, ignoring case. Maximum 10 references total. Omit for no references.
   *
   * Reference images for gemini-omni-1.2, wan-3.0, kling-4.0.
   */
  references?: ({
    name: string;
    /**
     * This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    file_path: string;
  })[];
  /**
   * Provide the assets for video editing.
   */
  assets: {
    /**
     * The video to edit. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path: string;
  };
};

/**
 * Success
 */
export type V1AiVideoEditorCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiVideoEditorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiVideoEditorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiVideoEditorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiVideoEditorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiVideoEditorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiVideoEditorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiVideoTranslatorCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds?: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds. The clip must be 1-30 seconds long.
   */
  end_seconds: number;
  /**
   * Language to translate the video's speech into.
   */
  target_language: "English" | "Chinese (Simplified)" | "Hindi" | "Spanish" | "Arabic" | "French" | "Afrikaans" | "Bengali" | "Bulgarian" | "Catalan" | "Croatian" | "Czech" | "Danish" | "Dutch" | "Estonian" | "Finnish" | "German" | "Greek" | "Gujarati" | "Hebrew" | "Hungarian" | "Indonesian" | "Italian" | "Japanese" | "Kannada" | "Kazakh" | "Korean" | "Latvian" | "Lithuanian" | "Malay" | "Malayalam" | "Marathi" | "Norwegian" | "Persian" | "Polish" | "Portuguese" | "Punjabi" | "Romanian" | "Russian" | "Serbian" | "Slovak" | "Slovenian" | "Swahili" | "Swedish" | "Tamil" | "Telugu" | "Thai" | "Chinese (Traditional)" | "Turkish" | "Ukrainian" | "Urdu" | "Vietnamese" | "Welsh";
  /**
   * Output video resolution. Defaults to 480p. 720p and 1080p require a paid plan.
   */
  resolution?: "480p" | "720p" | "1080p";
  /**
   * Source video for the translation job.
   */
  assets: {
    /**
     * Source video containing the speech to translate. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path: string;
  };
};

/**
 * Success
 */
export type V1AiVideoTranslatorCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiVideoTranslatorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiVideoTranslatorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiVideoTranslatorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiVideoTranslatorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiVideoTranslatorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiVideoTranslatorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiVideoUpscalerCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds?: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Output resolution. `720p` and `1080p` set the output's short side, `2k` and `4k` its long side; the aspect ratio is kept. Requires a paid plan.
   */
  resolution: "720p" | "1080p" | "2k" | "4k";
  /**
   * Source video for the upscale job.
   */
  assets: {
    /**
     * Video to upscale. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path: string;
  };
};

/**
 * Success
 */
export type V1AiVideoUpscalerCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiVideoUpscalerCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiVideoUpscalerCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiVideoUpscalerCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiVideoUpscalerCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiVideoUpscalerCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiVideoUpscalerCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AnimationCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * The desire output video frame rate
   */
  fps: number;
  /**
   * This value determines the duration of the output video.
   */
  end_seconds: number;
  /**
   * The height of the final output video. The maximum height depends on your subscription. Please refer to our [pricing page](https://magichour.ai/pricing) for more details
   */
  height: number;
  /**
   * The width of the final output video. The maximum width depends on your subscription. Please refer to our [pricing page](https://magichour.ai/pricing) for more details
   */
  width: number;
  /**
   * Defines the style of the output video
   */
  style: {
    /**
     * The art style used to create the output video
     */
    art_style: "Custom" | "Painterly Illustration" | "Vibrant Matte Illustration" | "Traditional Watercolor" | "Cyberpunk" | "Ink and Watercolor Portrait" | "Intricate Abstract Lines Portrait" | "3D Render" | "Old School Comic" | "Bold Colored Illustration" | "Synthwave" | "Minimal Cold Futurism" | "Futuristic Anime" | "Cinematic Miyazaki" | "Studio Ghibli Film Still" | "Soft Delicate Matte Portrait" | "Cinematic Landscape" | "Landscape Painting" | "Photograph" | "Jackson Pollock" | "Cubist" | "Abstract Minimalist" | "Impressionism" | "Van Gogh" | "Woodcut" | "Oil Painting" | "Vintage Japanese Anime" | "Pixar" | "Cosmic" | "Pixel Art" | "Fantasy" | "Arcane" | "Sin City" | "Double Exposure" | "Painted Cityscape" | "90s Streets" | "Overgrown" | "Postapocalyptic" | "Spooky" | "Miniatures" | "Low Poly" | "Art Deco" | "Inkpunk" | "Dark Graphic Illustration" | "Dark Watercolor" | "Faded Illustration" | "Directed by AI";
    /**
     * Describe custom art style. This field is required if `art_style` is `Custom`
     */
    art_style_custom?: string;
    /**
     * The camera effect used to create the output video
     */
    camera_effect: "Simple Zoom Out" | "Simple Zoom In" | "Bounce Out" | "Spin Bounce" | "Rolling Bounces" | "Rise and Climb" | "Dramatic Zoom In" | "Dramatic Zoom Out" | "Sway Out" | "Boost Zoom In" | "Boost Zoom Out" | "Heartbeat" | "Bounce in Place" | "Earthquake Bounce" | "Slice Bounce" | "Bounce In And Out" | "Jump" | "Road Trip" | "Traverse" | "Rubber Band" | "Rodeo" | "Accelerate" | "Speed of Light" | "Drift Spin" | "Vertigo" | "Cog in the Machine" | "Quadrant" | "Tron" | "Pusher" | "Roll In" | "Hesitate In" | "Zoom In - Audio Sync" | "Pulse - Audio Sync" | "Aggressive Zoom In - Audio Sync" | "Roll In - Audio Sync" | "Zoom Out - Audio Sync" | "Aggressive Zoom Out - Audio Sync" | "Sway Out - Audio Sync" | "Bounce and Spin - Audio Sync" | "Zoom In and Spin - Audio Sync" | "Vertigo - Audio Sync" | "Bounce Out - Audio Sync" | "Earthquake Bounce - Audio Sync" | "Pusher - Audio Sync" | "Evolve - Audio Sync" | "Devolve - Audio Sync" | "Slideshow" | "Pan Left" | "Pan Right" | "Tilt Up" | "Tilt Down" | "Directed by AI";
    /**
     *
     * * `custom` - Use your own prompt for the video.
     * * `use_lyrics` - Use the lyrics of the audio to create the prompt. If this option is selected, then `assets.audio_source` must be `file` or `youtube`.
     * * `ai_choose` - Let AI write the prompt. If this option is selected, then `assets.audio_source` must be `file` or `youtube`.
     */
    prompt_type: "custom" | "use_lyrics" | "ai_choose";
    /**
     * The prompt used for the video. Prompt is required if `prompt_type` is `custom`. Otherwise this value is ignored
     */
    prompt?: string;
    /**
     * Change determines how quickly the video's content changes across frames.
     * * Higher = more rapid transitions.
     * * Lower = more stable visual experience.
     */
    transition_speed: number;
  };
  /**
   * Provide the assets for animation.
   */
  assets: {
    /**
     * Optionally add an audio source if you'd like to incorporate audio into your video
     */
    audio_source: "none" | "file" | "youtube";
    /**
     * The path of the input audio. This field is required if `audio_source` is `file`. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    audio_file_path?: string;
    /**
     * Using a youtube video as the input source. This field is required if `audio_source` is `youtube`
     */
    youtube_url?: string;
    /**
     * An initial image to use a the first frame of the video. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path?: string;
  };
};

/**
 * Success
 */
export type V1AnimationCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AnimationCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AnimationCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AnimationCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AnimationCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AnimationCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AnimationCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AudioToVideoCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds?: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Output video resolution. Defaults to `720p` on paid tiers and `480p` on free tiers.
   */
  resolution?: "480p" | "720p" | "1080p";
  /**
   * Provide the audio file and an optional reference image.
   */
  assets: {
    /**
     * The path of the audio file. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    audio_file_path: string;
    /**
     * Reference image for the initial frame of the video. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path?: string;
  };
  /**
   * Attributes used to dictate the style of the output
   */
  style?: {
    /**
     * Prompt to guide the visual style of the video.
     */
    prompt?: string;
  };
};

/**
 * Success
 */
export type V1AudioToVideoCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AudioToVideoCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AudioToVideoCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AudioToVideoCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AudioToVideoCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AudioToVideoCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AudioToVideoCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AutoSubtitleGeneratorCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Provide the assets for auto subtitle generator
   */
  assets: {
    /**
     * This is the video used to add subtitles. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path: string;
  };
  /**
   * Style of the subtitle. At least one of `.style.template` or `.style.custom_config` must be provided.
   * * If only `.style.template` is provided, default values for the template will be used.
   * * If both are provided, the fields in `.style.custom_config` will be used to overwrite the fields in `.style.template`.
   * * If only `.style.custom_config` is provided, then all fields in `.style.custom_config` will be used.
   *
   * To use custom config only, the following `custom_config` params are required:
   * * `.style.custom_config.font`
   * * `.style.custom_config.text_color`
   * * `.style.custom_config.vertical_position`
   * * `.style.custom_config.horizontal_position`
   *
   */
  style: {
    /**
     * Preset subtitle templates. Please visit https://magichour.ai/create/auto-subtitle-generator to see the style of the existing templates.
     */
    template?: "karaoke" | "cinematic" | "minimalist" | "highlight";
    /**
     * Custom subtitle configuration.
     */
    custom_config?: {
      /**
       * Font name from Google Fonts. Not all fonts support all languages or character sets.
       * We recommend verifying language support and appearance directly on https://fonts.google.com before use.
       */
      font?: string;
      /**
       * Font size in pixels. If not provided, the font size is automatically calculated based on the video resolution.
       */
      font_size?: number;
      /**
       * Font style (e.g., normal, italic, bold)
       */
      font_style?: string;
      /**
       * Primary text color in hex format
       */
      text_color?: string;
      /**
       * Color used to highlight the current spoken text
       */
      highlighted_text_color?: string;
      /**
       * Stroke (outline) color of the text
       */
      stroke_color?: string;
      /**
       * Width of the text stroke in pixels. If `stroke_color` is provided, but `stroke_width` is not, the `stroke_width` will be calculated automatically based on the font size.
       */
      stroke_width?: number;
      /**
       * Vertical alignment of the text (e.g., top, center, bottom)
       */
      vertical_position?: string;
      /**
       * Horizontal alignment of the text (e.g., left, center, right)
       */
      horizontal_position?: string;
    };
  };
};

/**
 * Success
 */
export type V1AutoSubtitleGeneratorCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AutoSubtitleGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AutoSubtitleGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AutoSubtitleGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AutoSubtitleGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AutoSubtitleGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AutoSubtitleGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1CharacterReplaceCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds?: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Model to use. Defaults to `wan-animate`.
   *
   * * **`wan-animate`**: 480p, 720p. Supports `points` subject selection.
   * * **`kling-3.0`**: 720p, 1080p. Clips of 3–10 seconds in `replace` mode or 3–30 seconds in `animate` mode. Picks the main person automatically, so `points` are rejected.
   * * **`minimax-h3`**: 480p, 720p, 1080p. Clips of 1–30 seconds in `replace` mode or 1–60 seconds in `animate` mode. Subject `points` are `replace`-only; `animate` with `selection_mode` `point` returns 422, and with `auto` or no `selection_mode` the points are ignored.
   */
  model?: "wan-animate" | "kling-3.0" | "minimax-h3";
  /**
   * Output video resolution. Must be supported by `model`. Defaults to the lowest resolution available on your plan for that model.
   */
  resolution?: "480p" | "720p" | "1080p";
  /**
   * Source video and reference character image for the job.
   */
  assets: {
    /**
     * Source video containing the subject to replace or animate. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path: string;
    /**
     * Reference character image used as the replacement or animation target. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
  };
  /**
   * Optional style controls for replace vs animate mode and subject selection.
   */
  style?: {
    /**
     * Processing mode. `replace` swaps the detected subject with your reference character. `animate` transfers motion from the video onto your character image.
     */
    mode?: "replace" | "animate";
    /**
     * Optional direction. Supported by kling-3.0, minimax-h3. For MiniMax H3 in replace mode, ignored and not saved when `selection_mode` is `point`; applies only to automatic person selection.
     */
    prompt?: string;
    /**
     * How to locate the subject in the source video. `auto` detects a person automatically. `point` uses your `points` to mark the subject and is supported by `wan-animate`, `minimax-h3`. `minimax-h3` subject `points` are `replace`-only; `animate` with `selection_mode` `point` returns 422, and with `auto` or no `selection_mode` the points are ignored. Defaults to `auto`.
     */
    selection_mode?: "auto" | "point";
    /**
     * On-frame markers for manual subject selection. Required when `selection_mode` is `point`. Ignored when `selection_mode` is `auto` or omitted. Rejected for models without subject selection (supported by `wan-animate`, `minimax-h3`). `minimax-h3` subject `points` are `replace`-only; `animate` with `selection_mode` `point` returns 422, and with `auto` or no `selection_mode` the points are ignored. MiniMax H3 manual replacement accepts 1 to 10 points; each must satisfy `start_seconds <= time_seconds < end_seconds`.
     */
    points?: ({
      /**
       * Horizontal pixel coordinate in the source video frame at `time_seconds`, measured from the left edge.
       */
      position_x: number;
      /**
       * Vertical pixel coordinate in the source video frame at `time_seconds`, measured from the top edge.
       */
      position_y: number;
      /**
       * Timestamp on the source video timeline in seconds. Uses the same clock as `start_seconds` and `end_seconds`. For MiniMax H3 manual replacement, `start_seconds <= time_seconds < end_seconds`.
       */
      time_seconds: number;
    })[];
  };
};

/**
 * Success
 */
export type V1CharacterReplaceCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1CharacterReplaceCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1CharacterReplaceCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1CharacterReplaceCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1CharacterReplaceCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1CharacterReplaceCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1CharacterReplaceCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1FaceSwapCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * `height` is deprecated and no longer influences the output video's resolution.
   *
   * This field is retained only for backward compatibility and will be removed in a future release.
   * @deprecated
   */
  height?: (number) | null;
  /**
   * `width` is deprecated and no longer influences the output video's resolution.
   *
   * This field is retained only for backward compatibility and will be removed in a future release.
   * @deprecated
   */
  width?: (number) | null;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Style of the face swap video.
   */
  style?: {
    /**
     * * `v1` - May preserve skin detail and texture better, but weaker identity preservation.
     * * `v2` - Faster, sharper, better handling of hair and glasses. stronger identity preservation.
     * * `default` - Use the version we recommend, which will change over time. This is recommended unless you need a specific earlier version. This is the default behavior.
     */
    version?: "v1" | "v2" | "default";
  };
  /**
   * Provide the assets for face swap. For video, The `video_source` field determines whether `video_file_path` or `youtube_url` field is used
   */
  assets: {
    /**
     * Choose how to swap faces:
     * - **all-faces** (recommended) — swap all detected faces using one source image (`source_file_path` required)
     * - **individual-faces** — specify exact mappings using `face_mappings`
     */
    face_swap_mode?: "all-faces" | "individual-faces";
    /**
     * The path of the input image with the face to be swapped.  The value is required if `face_swap_mode` is `all-faces`.
     *
     * This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path?: string;
    /**
     * This is the array of face mappings used for multiple face swap. The value is required if `face_swap_mode` is `individual-faces`.
     */
    face_mappings?: ({
      /**
       * The face detected from the image in `target_file_path`. The file name is in the format of `<face_frame>-<face_index>.png`. This value is corresponds to the response in the [face detection API](https://docs.magichour.ai/api-reference/files/get-face-detection-details).
       *
       * * The face_frame is the frame number of the face in the target image. For images, the frame number is always 0.
       * * The face_index is the index of the face in the target image, starting from 0 going left to right.
       */
      original_face: string;
      /**
       * The face image that will be used to replace the face in the `original_face`. This value is either
       * - a direct URL to the file. The URL path must end in a supported file extension.
       * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
       *
       * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
       *
       */
      new_face: string;
    })[];
    /**
     * Choose your video source.
     */
    video_source: "file" | "youtube";
    /**
     * Your video file. Required if `video_source` is `file`. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path?: string;
    /**
     * YouTube URL (required if `video_source` is `youtube`).
     */
    youtube_url?: string;
  };
};

/**
 * Success
 */
export type V1FaceSwapCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1FaceSwapCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1FaceSwapCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1FaceSwapCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1FaceSwapCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1FaceSwapCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1FaceSwapCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1ImageToVideoCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * The total duration of the output video in seconds. Supported durations depend on the chosen model:
   *
   * * **`gemini-omni-1.2`**: any integer from 3 to 15
   * * **`kling-2.6`**: 5, 10
   * * **`kling-3.0`**: any integer from 3 to 15
   * * **`kling-4.0`**: any integer from 3 to 30
   * * **`ltx-2.5`**: any integer from 1 to 60
   * * **`minimax-h3`**: any integer from 1 to 30
   * * **`seedance-1.5`**: any integer from 4 to 12
   * * **`seedance-2.0`**: any integer from 4 to 15
   * * **`seedance-2.0-fast`**: any integer from 4 to 15
   * * **`seedance-2.0-mini`**: any integer from 4 to 15
   * * **`seedance-2.5`**: any integer from 4 to 30
   * * **`veo3.1`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
   * * **`veo3.1-lite`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
   * * **`wan-2.2`**: 3, 4, 5, 6, 7, 8, 9, 10, 15
   * * **`wan-3.0`**: any integer from 2 to 30
   *
   */
  end_seconds: number;
  /**
   * `height` is deprecated and no longer influences the output video's resolution.
   *
   * This field is retained only for backward compatibility and will be removed in a future release.
   * @deprecated
   */
  height?: (number) | null;
  /**
   * `width` is deprecated and no longer influences the output video's resolution.
   *
   * This field is retained only for backward compatibility and will be removed in a future release.
   * @deprecated
   */
  width?: (number) | null;
  /**
   * The AI model to use for video generation.
   *
   * * `default`: automatically selects a model based on subscription tier, resolution and duration.
   * * `gemini-omni-1.2`: Best for precise clips up to 15s, references, and high-resolution output.
   * * `kling-2.6`: Best for action, motion blur, and controlled camera moves.
   * * `kling-3.0`: Best for cinematic stories, references, and optional audio.
   * * `kling-4.0`: Create cinematic videos with image and video references and optional audio.
   * * `ltx-2.5`: Fastest for general scenes, long clips, audio, and rapid iteration.
   * * `minimax-h3`: Great for reference-driven clips with native audio and longer durations.
   * * `seedance-1.5`: Best for smooth, consistent motion with an end frame.
   * * `seedance-2.0`: Best for reference-led clips with precise subject control.
   * * `seedance-2.0-fast`: Fast reference-led clips with consistent motion and audio.
   * * `seedance-2.0-mini`: Faster reference-led clips with consistent motion and audio.
   * * `seedance-2.5`: Best for premium realism, detail, and natural motion.
   * * `veo3.1`: Best for romantic interactions and expressive action, with realistic detail.
   * * `veo3.1-lite`: Balanced realism and audio at a lower cost than Veo 3.1.
   * * `wan-2.2`: Best for physical motion, action, and camera movement.
   * * `wan-3.0`: High-quality video with native audio, long clips, and end-frame control.
   *
   * If you specify the deprecated model value that includes the `-audio` suffix, this will be the same as included `audio` as `true`.
   */
  model?: "default" | "minimax-h3" | "kling-4.0" | "kling-3.0" | "ltx-2.5" | "wan-2.2" | "seedance-2.5" | "wan-3.0" | "seedance-2.0-mini" | "veo3.1" | "veo3.1-lite" | "seedance-2.0" | "kling-2.6" | "gemini-omni-1.2" | "gemini-omni-1.1" | "seedance-2.0-fast" | "seedance-1.5" | "sora-2" | "ltx-2.3" | "ltx-2" | "kling-2.5" | "kling-1.6" | "seedance" | "kling-2.5-audio" | "veo3.1-audio";
  /**
   * Controls the output video resolution. Defaults to `720p` on paid tiers and `480p` on free tiers.
   *
   * * **`gemini-omni-1.2`**: Supports 360p, 720p, 1080p, 4k.
   * * **`kling-2.6`**: Supports 720p, 1080p.
   * * **`kling-3.0`**: Supports 720p, 1080p, 4k.
   * * **`kling-4.0`**: Supports 720p, 1080p.
   * * **`ltx-2.5`**: Supports 480p, 720p, 1080p.
   * * **`minimax-h3`**: Supports 480p, 720p, 1080p.
   * * **`seedance-1.5`**: Supports 480p, 720p, 1080p.
   * * **`seedance-2.0`**: Supports 480p, 720p, 1080p, 4k.
   * * **`seedance-2.0-fast`**: Supports 480p, 720p.
   * * **`seedance-2.0-mini`**: Supports 480p, 720p.
   * * **`seedance-2.5`**: Supports 480p, 720p, 1080p.
   * * **`veo3.1`**: Supports 720p, 1080p.
   * * **`veo3.1-lite`**: Supports 720p, 1080p.
   * * **`wan-2.2`**: Supports 480p, 720p, 1080p.
   * * **`wan-3.0`**: Supports 480p, 720p, 1080p.
   *
   */
  resolution?: "360p" | "480p" | "720p" | "1080p" | "4k";
  /**
   * Whether to include audio in the video. Defaults to `false` if not specified.
   *
   * Audio support varies by model:
   * * **`gemini-omni-1.2`**: Toggle-able: no additional credits for audio
   * * **`kling-2.6`**: Not supported
   * * **`kling-3.0`**: Toggle-able: audio adds extra credits when enabled
   * * **`kling-4.0`**: Toggle-able: no additional credits for audio
   * * **`ltx-2.5`**: Toggle-able: no additional credits for audio
   * * **`minimax-h3`**: Toggle-able: no additional credits for audio
   * * **`seedance-1.5`**: Toggle-able: audio adds extra credits when enabled
   * * **`seedance-2.0`**: Toggle-able: no additional credits for audio
   * * **`seedance-2.0-fast`**: Toggle-able: no additional credits for audio
   * * **`seedance-2.0-mini`**: Toggle-able: no additional credits for audio
   * * **`seedance-2.5`**: Toggle-able: no additional credits for audio
   * * **`veo3.1`**: Toggle-able: audio adds extra credits when enabled
   * * **`veo3.1-lite`**: Toggle-able: audio adds extra credits when enabled
   * * **`wan-2.2`**: Not supported
   * * **`wan-3.0`**: Toggle-able: no additional credits for audio
   *
   */
  audio?: boolean;
  /**
   * Attributed used to dictate the style of the output
   */
  style?: {
    /**
     * The prompt used for the video. Maximum length depends on the model that runs, in characters:
     *
     * * **`gemini-omni-1.2`**: 4000 characters.
     * * **`kling-2.6`**: 2500 characters.
     * * **`kling-3.0`**: 2500 characters.
     * * **`kling-4.0`**: 10000 characters.
     * * **`ltx-2.5`**: 4000 characters.
     * * **`minimax-h3`**: 20000 characters.
     * * **`seedance-1.5`**: 4000 characters.
     * * **`seedance-2.0`**: 4000 characters.
     * * **`seedance-2.0-fast`**: 4000 characters.
     * * **`seedance-2.0-mini`**: 4000 characters.
     * * **`seedance-2.5`**: 4000 characters.
     * * **`veo3.1`**: 2500 characters.
     * * **`veo3.1-lite`**: 2500 characters.
     * * **`wan-2.2`**: 10000 characters.
     * * **`wan-3.0`**: 10000 characters.
     *
     * For `default`, the limit of the automatically selected model applies. Selection depends on subscription tier, resolution and duration. Specify an explicit model to use a known prompt limit. Prompts exceeding the effective model's limit are rejected, not truncated.
     */
    prompt?: string;
    /**
     * Deprecated: Please use `resolution` instead. For backward compatibility,
     * * `false` maps to 720p resolution
     * * `true` maps to 1080p resolution
     *
     * This field will be removed in a future version. Use the `resolution` field to directly specify the resolution.
     * @deprecated
     */
    high_quality?: boolean;
    /**
     * DEPRECATED: Please use `resolution` field instead. For backward compatibility:
     * * `quick` maps to 720p resolution
     * * `studio` maps to 1080p resolution
     *
     * This field will be removed in a future version. Use the `resolution` field to directly to specify the resolution.
     * @deprecated
     */
    quality_mode?: "quick" | "studio";
  };
  /**
   * Provide the assets for image-to-video.
   */
  assets: {
    /**
     * The path of the image file. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
    /**
     * The image to use as the last frame of the video.
     *
     * * **`gemini-omni-1.2`**: Supports 360p, 720p, 1080p, 4k. Requires a duration of 10 seconds or less.
     * * **`kling-2.6`**: Supports 1080p.
     * * **`kling-3.0`**: Supports 720p, 1080p, 4k.
     * * **`kling-4.0`**: Supports 720p, 1080p.
     * * **`ltx-2.5`**: Supports 480p, 720p, 1080p.
     * * **`minimax-h3`**: Supports 480p, 720p, 1080p.
     * * **`seedance-1.5`**: Supports 480p, 720p, 1080p.
     * * **`seedance-2.0`**: Supports 480p, 720p, 1080p, 4k.
     * * **`seedance-2.0-fast`**: Supports 480p, 720p.
     * * **`seedance-2.0-mini`**: Supports 480p, 720p.
     * * **`seedance-2.5`**: Supports 480p, 720p, 1080p.
     * * **`veo3.1`**: Supports 720p, 1080p. Requires a duration of 8 seconds or less.
     * * **`veo3.1-lite`**: Supports 720p, 1080p. Requires a duration of 8 seconds or less.
     * * **`wan-2.2`**: Not supported
     * * **`wan-3.0`**: Supports 480p, 720p, 1080p.
     *
     * This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    end_image_file_path?: string;
  };
};

/**
 * Success
 */
export type V1ImageToVideoCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1ImageToVideoCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1ImageToVideoCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1ImageToVideoCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1ImageToVideoCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1ImageToVideoCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1ImageToVideoCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1LipSyncCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * `height` is deprecated and no longer influences the output video's resolution.
   *
   * This field is retained only for backward compatibility and will be removed in a future release.
   * @deprecated
   */
  height?: (number) | null;
  /**
   * `width` is deprecated and no longer influences the output video's resolution.
   *
   * This field is retained only for backward compatibility and will be removed in a future release.
   * @deprecated
   */
  width?: (number) | null;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Defines the maximum FPS (frames per second) for the output video. If the input video's FPS is lower than this limit, the output video will retain the input FPS. This is useful for reducing unnecessary frame usage in scenarios where high FPS is not required.
   */
  max_fps_limit?: number;
  /**
   * Provide the assets for lip-sync. For video, The `video_source` field determines whether `video_file_path` or `youtube_url` field is used
   */
  assets: {
    /**
     * The path of the audio file. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    audio_file_path: string;
    /**
     * Choose your video source.
     */
    video_source: "file" | "youtube";
    /**
     * Your video file. Required if `video_source` is `file`. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path?: string;
    /**
     * YouTube URL (required if `video_source` is `youtube`).
     */
    youtube_url?: string;
  };
  /**
   * Attributes used to dictate the style of the output
   */
  style?: {
    /**
     * A specific version of our lip sync system, optimized for different needs.
     * * `lite` -  Fast lip sync - best for simple videos. Costs 1 credit per frame of video.
     * * `standard` -  Natural, accurate lip sync - best for most creators. Requires visible mouth movement in the opening seconds of the input video. Costs 1 credit per frame of video.
     * * `pro` -  Premium fidelity with enhanced detail - best for professionals. Requires visible mouth movement in the opening seconds of the input video. Costs 2 credits per frame of video.
     *
     * If your source is a still image, including a still image saved as a static video, use [AI Talking Photo](https://docs.magichour.ai/api-reference/video-projects/ai-talking-photo) with the original image and your audio instead.
     *
     * Note: `pro` is only available for users on Creator, Pro, and Business tiers.
     *
     */
    generation_mode?: "lite" | "standard" | "pro";
  };
};

/**
 * Success
 */
export type V1LipSyncCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1LipSyncCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1LipSyncCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1LipSyncCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1LipSyncCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1LipSyncCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1LipSyncCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1TextToVideoCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * The total duration of the output video in seconds. Supported durations depend on the chosen model:
   *
   * * **`gemini-omni-1.2`**: any integer from 3 to 15
   * * **`kling-2.6`**: 5, 10
   * * **`kling-3.0`**: any integer from 3 to 15
   * * **`kling-4.0`**: any integer from 3 to 30
   * * **`ltx-2.5`**: any integer from 1 to 60
   * * **`minimax-h3`**: any integer from 1 to 30
   * * **`seedance-1.5`**: any integer from 4 to 12
   * * **`seedance-2.0`**: any integer from 4 to 15
   * * **`seedance-2.0-fast`**: any integer from 4 to 15
   * * **`seedance-2.0-mini`**: any integer from 4 to 15
   * * **`seedance-2.5`**: any integer from 4 to 30
   * * **`veo3.1`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
   * * **`veo3.1-lite`**: 4, 6, 8, 16, 24, 32, 40, 48, 56
   * * **`wan-2.2`**: 3, 4, 5, 6, 7, 8, 9, 10, 15
   * * **`wan-3.0`**: any integer from 2 to 30
   *
   */
  end_seconds: number;
  /**
   * Determines the aspect ratio of the output video.
   *
   * * **`gemini-omni-1.2`**: Supports 16:9, 9:16.
   * * **`kling-2.6`**: Supports 9:16, 16:9, 1:1.
   * * **`kling-3.0`**: Supports 9:16, 16:9, 1:1.
   * * **`kling-4.0`**: Supports 9:16, 16:9, 1:1.
   * * **`ltx-2.5`**: Supports 9:16, 16:9, 1:1.
   * * **`minimax-h3`**: Supports 16:9, 9:16, 1:1.
   * * **`seedance-1.5`**: Supports 9:16, 16:9, 1:1.
   * * **`seedance-2.0`**: Supports 9:16, 16:9, 1:1.
   * * **`seedance-2.0-fast`**: Supports 9:16, 16:9, 1:1.
   * * **`seedance-2.0-mini`**: Supports 9:16, 16:9, 1:1.
   * * **`seedance-2.5`**: Supports 9:16, 16:9, 1:1.
   * * **`veo3.1`**: Supports 9:16, 16:9.
   * * **`veo3.1-lite`**: Supports 9:16, 16:9.
   * * **`wan-2.2`**: Supports 9:16, 16:9, 1:1.
   * * **`wan-3.0`**: Supports 16:9, 9:16, 1:1.
   *
   */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
  /**
   * Deprecated. Use `aspect_ratio` instead.
   * @deprecated
   */
  orientation?: "portrait" | "landscape" | "square";
  /**
   * Controls the output video resolution. Defaults to `720p` on paid tiers and `480p` on free tiers.
   *
   * * **`gemini-omni-1.2`**: Supports 360p, 720p, 1080p, 4k.
   * * **`kling-2.6`**: Supports 720p, 1080p.
   * * **`kling-3.0`**: Supports 720p, 1080p, 4k.
   * * **`kling-4.0`**: Supports 720p, 1080p.
   * * **`ltx-2.5`**: Supports 480p, 720p, 1080p.
   * * **`minimax-h3`**: Supports 480p, 720p, 1080p.
   * * **`seedance-1.5`**: Supports 480p, 720p, 1080p.
   * * **`seedance-2.0`**: Supports 480p, 720p, 1080p, 4k.
   * * **`seedance-2.0-fast`**: Supports 480p, 720p.
   * * **`seedance-2.0-mini`**: Supports 480p, 720p.
   * * **`seedance-2.5`**: Supports 480p, 720p, 1080p.
   * * **`veo3.1`**: Supports 720p, 1080p.
   * * **`veo3.1-lite`**: Supports 720p, 1080p.
   * * **`wan-2.2`**: Supports 480p, 720p, 1080p.
   * * **`wan-3.0`**: Supports 480p, 720p, 1080p.
   *
   */
  resolution?: "360p" | "480p" | "720p" | "1080p" | "4k";
  /**
   * The AI model to use for video generation.
   *
   * * `default`: automatically selects a model based on subscription tier, resolution and duration.
   * * `gemini-omni-1.2`: Best for precise clips up to 15s, references, and high-resolution output.
   * * `kling-2.6`: Best for action, motion blur, and controlled camera moves.
   * * `kling-3.0`: Best for cinematic stories, references, and optional audio.
   * * `kling-4.0`: Create cinematic videos with image and video references and optional audio.
   * * `ltx-2.5`: Fastest for general scenes, long clips, audio, and rapid iteration.
   * * `minimax-h3`: Great for reference-driven clips with native audio and longer durations.
   * * `seedance-1.5`: Best for smooth, consistent motion with an end frame.
   * * `seedance-2.0`: Best for reference-led clips with precise subject control.
   * * `seedance-2.0-fast`: Fast reference-led clips with consistent motion and audio.
   * * `seedance-2.0-mini`: Faster reference-led clips with consistent motion and audio.
   * * `seedance-2.5`: Best for premium realism, detail, and natural motion.
   * * `veo3.1`: Best for romantic interactions and expressive action, with realistic detail.
   * * `veo3.1-lite`: Balanced realism and audio at a lower cost than Veo 3.1.
   * * `wan-2.2`: Best for physical motion, action, and camera movement.
   * * `wan-3.0`: High-quality video with native audio, long clips, and end-frame control.
   *
   * If you specify the deprecated model value that includes the `-audio` suffix, this will be the same as included `audio` as `true`.
   */
  model?: "default" | "minimax-h3" | "kling-4.0" | "kling-3.0" | "ltx-2.5" | "wan-2.2" | "seedance-2.5" | "wan-3.0" | "seedance-2.0-mini" | "veo3.1" | "veo3.1-lite" | "seedance-2.0" | "kling-2.6" | "gemini-omni-1.2" | "gemini-omni-1.1" | "seedance-2.0-fast" | "seedance-1.5" | "sora-2" | "ltx-2.3" | "ltx-2" | "kling-2.5" | "kling-1.6" | "seedance" | "kling-2.5-audio" | "veo3.1-audio";
  /**
   * Whether to include audio in the video. Defaults to `false` if not specified.
   *
   * Audio support varies by model:
   * * **`gemini-omni-1.2`**: Toggle-able: no additional credits for audio
   * * **`kling-2.6`**: Not supported
   * * **`kling-3.0`**: Toggle-able: audio adds extra credits when enabled
   * * **`kling-4.0`**: Toggle-able: no additional credits for audio
   * * **`ltx-2.5`**: Toggle-able: no additional credits for audio
   * * **`minimax-h3`**: Toggle-able: no additional credits for audio
   * * **`seedance-1.5`**: Toggle-able: audio adds extra credits when enabled
   * * **`seedance-2.0`**: Toggle-able: no additional credits for audio
   * * **`seedance-2.0-fast`**: Toggle-able: no additional credits for audio
   * * **`seedance-2.0-mini`**: Toggle-able: no additional credits for audio
   * * **`seedance-2.5`**: Toggle-able: no additional credits for audio
   * * **`veo3.1`**: Toggle-able: audio adds extra credits when enabled
   * * **`veo3.1-lite`**: Toggle-able: audio adds extra credits when enabled
   * * **`wan-2.2`**: Not supported
   * * **`wan-3.0`**: Toggle-able: no additional credits for audio
   *
   */
  audio?: boolean;
  style: {
    /**
     * The prompt used for the video. Maximum length depends on the model that runs, in characters:
     *
     * * **`gemini-omni-1.2`**: 4000 characters.
     * * **`kling-2.6`**: 2500 characters.
     * * **`kling-3.0`**: 2500 characters.
     * * **`kling-4.0`**: 10000 characters.
     * * **`ltx-2.5`**: 4000 characters.
     * * **`minimax-h3`**: 20000 characters.
     * * **`seedance-1.5`**: 4000 characters.
     * * **`seedance-2.0`**: 4000 characters.
     * * **`seedance-2.0-fast`**: 4000 characters.
     * * **`seedance-2.0-mini`**: 4000 characters.
     * * **`seedance-2.5`**: 4000 characters.
     * * **`veo3.1`**: 2500 characters.
     * * **`veo3.1-lite`**: 2500 characters.
     * * **`wan-2.2`**: 10000 characters.
     * * **`wan-3.0`**: 10000 characters.
     *
     * For `default`, the limit of the automatically selected model applies. Selection depends on subscription tier, resolution and duration. Specify an explicit model to use a known prompt limit. Prompts exceeding the effective model's limit are rejected, not truncated.
     */
    prompt: string;
    /**
     * DEPRECATED: Please use `resolution` field instead. For backward compatibility:
     * * `quick` maps to 720p resolution
     * * `studio` maps to 1080p resolution
     *
     * This field will be removed in a future version. Use the `resolution` field to directly to specify the resolution.
     * @deprecated
     */
    quality_mode?: "quick" | "studio";
  };
  /**
   * Name references without @ and refer to them as @name in style.prompt. Names must be unique, ignoring case. Maximum 50 references total. Omit for no references.
   *
   * Reference media for video generation.
   *
   * Supported models and reference media:
   * * **`gemini-omni-1.2`**: Supports images, videos. Up to 10 references.
   * * **`kling-3.0`**: Supports images, videos. Up to 10 references.
   * * **`kling-4.0`**: Supports images, videos. Up to 10 references.
   * * **`minimax-h3`**: Supports images, videos, audio. Up to 10 references. Video references must be 2–15 seconds each and 15 seconds combined, and are used in full. Audio references must be 2–15 seconds each and are used in full.
   * * **`seedance-2.0`**: Supports images, videos, audio. Up to 10 references.
   * * **`seedance-2.0-fast`**: Supports images, videos, audio. Up to 10 references.
   * * **`seedance-2.0-mini`**: Supports images, videos, audio. Up to 10 references.
   * * **`seedance-2.5`**: Supports images, videos, audio. Up to 50 references. Maximum 30 images, 10 videos and 10 audio references. The worker trims video references to 30 seconds combined and audio references to 30 seconds combined. Audio references require an image or video reference.
   * * **`veo3.1`**: Supports images. Up to 3 references. Requires `end_seconds` of 8.
   * * **`wan-3.0`**: Supports images, videos, audio. Up to 10 references.
   */
  references?: ({
    name: string;
    /**
     * This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    file_path: string;
  })[];
};

/**
 * Success
 */
export type V1TextToVideoCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1TextToVideoCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1TextToVideoCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1TextToVideoCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1TextToVideoCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1TextToVideoCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1TextToVideoCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1VideoToVideoCreateBody = {
  /**
   * Give your video a custom name for easy identification.
   */
  name?: string;
  /**
   * Start time of your clip (seconds). Must be ≥ 0.
   */
  start_seconds: number;
  /**
   * End time of your clip (seconds). Must be greater than start_seconds.
   */
  end_seconds: number;
  /**
   * Source video height in integer pixels. Required and positive for v3; ignored for v1/v2.
   */
  height?: (number) | null;
  /**
   * Source video FPS for v3 frame limits and estimated credits. Defaults to 30; final charges settle to rendered frames.
   */
  fps?: number;
  /**
   * Source video width in integer pixels. Required and positive for v3; ignored for v1/v2.
   */
  width?: (number) | null;
  /**
   * Determines whether the resulting video will have the same frame per second as the original video, or half.
   * * `FULL` - the result video will have the same FPS as the input video
   * * `HALF` - the result video will have half the FPS as the input video
   */
  fps_resolution?: "FULL" | "HALF";
  style: {
    art_style: "WWI Soldier" | "Minecraft" | "Watercolor" | "Chalkboard" | "Pixel" | "Rick & Morty" | "Sketch" | "Roblox" | "Hitman" | "Joker" | "Darth Maul" | "Jon Snow" | "Dexter's Lab" | "Darth Vader" | "Shadow" | "Bronze Statue" | "Toy Story" | "Puppets" | "Yarn" | "Obsidian Gods" | "Claymation" | "James Bond" | "Retro Sci-Fi" | "Chrome" | "Lego" | "Origami" | "Scorpion" | "Ash Ketchum" | "Terra Cotta Soldiers" | "Obi-Wan" | "Venom" | "Scream" | "Matrix" | "Crusader" | "Batman" | "Superman" | "Deadpool" | "Ghost" | "Iron Man" | "Warzone" | "Thanos" | "Tarzan" | "Polish Hussar" | "Gladiators" | "Grim Reaper" | "Hulk" | "Candle" | "Anime Ninja" | "Sand Sculpture" | "Spiderman" | "Ash Skeleton" | "Sub-Zero" | "Hades" | "Studio Ghibli" | "Comic" | "Gojo" | "Diorama" | "Mad Max" | "Dragon Rider Knight" | "Nightmare" | "Pennywise" | "One Punch Man" | "Anime Aviator" | "Slime" | "Sandpaper" | "Spray Paint" | "Flash" | "Impressionism" | "Master Chief" | "Solid Snake" | "Street Fighter" | "Hologram" | "Plague Doctor" | "South Park" | "GTA" | "Chess" | "Chalk Dust" | "Clay" | "Peely" | "Pepe the Frog" | "Tarot Card" | "Ninja Turtle" | "Tribal Warrior" | "Bubble Wrap" | "Glass Sculpture" | "Frankenstein" | "Napoleon Painting" | "Pokémon Trainer" | "Invader Zim" | "Terminator" | "Cuphead Devil" | "Cyclops" | "Luigi" | "Mythra" | "Phoenix Wright" | "Swamp Creatures" | "Vikings" | "Fossils" | "Cyber Samurai" | "Ice and Fire" | "Braveheart" | "Fire Golems" | "Golden Scarabs" | "Black Ink" | "Lich King" | "WWII Paratrooper" | "101 Dalmatians" | "8-Bit Angel" | "Ace (One Piece)" | "Aviator" | "Bagheera" | "Diablo" | "C-3PO" | "Qilin" | "Crusader Zombie" | "Daredevil" | "Statue of David" | "Doctor Doom" | "White Walker" | "Bioshock" | "Jason Voorhees" | "Kai’Sa" | "Killer Croc" | "Mechanical Scorpion" | "Metallic Angel" | "Spider-Venom" | "Mystique" | "Nathan Drake" | "Wendingo" | "Nautilus" | "Nosferatu" | "Gray NPC" | "Orc" | "Sans Undertale" | "Spiderman 2099" | "TF2 Spy" | "Sulley" | "The Creeper" | "X-Ray Soldier" | "Zeus (Disney)" | "Zombie" | "Eclipse" | "Nebula" | "Polygon" | "Raiden" | "Celestial" | "Wool Beast" | "Chibi" | "Albert Einstein" | "Alucard" | "Confederate Soldier" | "Fabric" | "Avian Aviator" | "FNAF" | "Mushroom" | "Beast" | "Blitzcrank" | "Captain America" | "Crystal Knight" | "Darkseid" | "Dio Brando" | "Doctor Fate" | "Green Goblin" | "Groot" | "Rooster" | "Devil" | "Kenshiro" | "Martian" | "Mech Dragon" | "Prince" | "Pyke" | "Robin" | "RoboCop" | "Samara Morgan" | "Shiva" | "Singed" | "Star Trek" | "Steampunk Captain" | "Tyrande Whisperwind" | "Predator" | "Yeti" | "Marble Sculpture" | "Washi" | "Woodcut" | "Dark Reaper" | "Mech Valkryie" | "Renaissance Painting" | "Renaissance Sketch" | "Comic Batman" | "Astronaut" | "Dragonball Z" | "Watercolor Painting" | "Cinematic" | "Optimus Prime" | "Mario" | "Poseidon" | "Moss Spirits" | "Green Lantern" | "Detective Conan" | "Prince of Persia" | "King Arthur" | "Wolverine" | "Statue of Liberty" | "Black Panther" | "Iron Valor" | "Legend of Zelda" | "Mandalorian" | "Aquaman" | "Cloud Strife" | "Samurai" | "John Wick" | "Freddy Krueger" | "Hercules" | "Spartan" | "Shrek" | "Solar Flare" | "Scottish Highlander" | "Desert Wraith" | "Kung Fu" | "Porcelain" | "Molten Rock" | "Apocalyptic Marble" | "Ash" | "Popeye" | "Simpsons" | "Liquid Metal" | "Cave Painting" | "Crayon" | "Scuba Diver" | "Vampire" | "Miner" | "Origami Samurai" | "Qing Dynasty" | "Wax" | "Bastet" | "Bellwether" | "Hobbits" | "Day of the Dead" | "Engineer" | "Finn" | "Huggy Wuggy" | "Krillin" | "Hugging Bear" | "Malfurion Stormrage" | "Mickey Mouse" | "Might Guy" | "Nala" | "Naruto Uzumaki" | "Oni" | "Piccolo" | "Raiden (Metal Gear)" | "Rocket Raccoon" | "Russell (Up)" | "Shark Gladiator" | "The Mask" | "The Mummy" | "The Nun" | "Indiana Jones" | "Aragorn" | "Foam" | "Jello" | "Dune" | "Anubis" | "Genghis Khan" | "Ink Blot" | "Ken" | "Kratos" | "Lara Croft" | "Legolas" | "Luffy" | "Oil Slick" | "Mech Angels" | "Pencil Sketch" | "Gargoyle" | "Ink Bottle" | "Marble Chesspieces" | "Coral" | "Solar Eclipse" | "Molten Beasts" | "Porcelain Nobles" | "Calligraphy" | "Paper Lantern" | "Sandstorm Gladiator" | "Insect" | "Wool Giant" | "Rusted Valor" | "Pharaoh" | "Paper Cut" | "Wax Museum" | "Blood Ink" | "Ink Samurai" | "Demon Hunter" | "Spirit Fox" | "Baroque" | "Clouds" | "Goblin Inventor" | "HK-47" | "Karl Marx" | "Da Vinci" | "Cracked Marble" | "Medieval Painting" | "Melted Wax" | "Socrates" | "Sumo Wrestler" | "Postapocalyptic" | "William Wallace" | "Leatherface" | "Regan MacNeil" | "Frieza" | "Cell" | "Sidewalk Chalk" | "Altair Ibn-La’Ahad" | "American Gothic" | "Aztec" | "Banzai" | "Beowulf" | "Boba Fett" | "Carl Fredricksen" | "Carnage" | "Cheetah" | "Portal" | "Chewbacca" | "Thor" | "Chucky" | "Cinderella" | "The Witcher" | "Cursed Samurai" | "Deathstroke" | "Dieselpunk" | "Din Djarin" | "Donald Duck" | "Edward Elric" | "Joy vs. Anger" | "Gandalf" | "Native American" | "Ghost Rider" | "Gimli" | "Girl with Pearl Earring" | "GLaDOS" | "Hades (Disney)" | "Han Solo" | "Hellboy" | "Japanese Raijin" | "Japanese Susanoo" | "Jarvan" | "Levi Ackerman" | "John Darling" | "Fury Road" | "Maestro Hulk" | "Man Bat" | "Mike Wazowski" | "Minotaur King" | "Wukong" | "Robin Hood" | "Samus" | "Sarah Kerrigan" | "Shadow Phoenix" | "Simón Bolívar" | "The Flash" | "Leprechaun" | "The Thinker" | "Thrall" | "Tree Ent King" | "Alien" | "Erron Black" | "3D Render" | "Airbender" | "Android" | "Anime Warrior" | "Armored Knight" | "Assassin's Creed" | "Avatar" | "Black Spiderman" | "Bold Anime" | "Celestial Skin" | "Chinese Swordsmen" | "Cyberpunk" | "Cypher" | "Dark Fantasy" | "Future Bot" | "Futuristic Fantasy" | "Ghibli Anime" | "Gundam" | "Illustration" | "Ink" | "Ink Poster" | "Jinx" | "Knight" | "Link" | "Marble" | "Mech" | "Naruto" | "Neon Dream" | "No Art Style" | "Oil Painting" | "On Fire" | "Painterly Anime" | "Pixar" | "Power Armor" | "Power Ranger" | "Radiant Anime" | "Realistic Anime" | "Realistic Pixar" | "Retro Anime" | "Samurai Bot" | "Sharp Anime" | "Soft Anime" | "Starfield" | "The Void" | "Tomb Raider" | "Underwater" | "Van Gogh" | "Viking" | "Western Anime" | "Wu Kong" | "Wuxia Anime" | "Zelda";
    /**
     * * `v1` - more detail, closer prompt adherence, and frame-by-frame previews.
     * * `v2` - faster, more consistent, and less noisy.
     * * `v3` - consistent styling guided by a caller-supplied reference image. Requires assets.initial_image_path and positive width/height.
     * * `default` - use the selected art style's default version, including v3.
     */
    version?: "v1" | "v2" | "v3" | "default";
    /**
     * * `default` - Use the default recommended prompt for the art style.
     * * `custom` - Only use the prompt passed in the API. Note: for v1, lora prompt will still be auto added to apply the art style properly.
     * * `append_default` - Add the default recommended prompt to the end of the prompt passed in the API.
     */
    prompt_type?: "default" | "custom" | "append_default";
    /**
     * The prompt used for the video. Prompt is required if `prompt_type` is `custom` or `append_default`. If `prompt_type` is `default`, then the `prompt` value passed will be ignored.
     */
    prompt?: (string) | null;
    /**
     * * `Dreamshaper` - a good all-around model that works for both animations as well as realism.
     * * `Absolute Reality` - better at realism, but you'll often get similar results with Dreamshaper as well.
     * * `Flat 2D Anime` - best for a flat illustration style that's common in most anime.
     * * `Default` - the v3 model.
     * * `default` - use the default recommended model for the selected art style.
     */
    model?: "Dreamshaper" | "Absolute Reality" | "Flat 2D Anime" | "Soft Anime" | "Kaywaii" | "Western Anime" | "3D Anime" | "Default" | "default";
  };
  /**
   * Provide the assets for video-to-video. For video, The `video_source` field determines whether `video_file_path` or `youtube_url` field is used
   */
  assets: {
    /**
     * Choose your video source.
     */
    video_source: "file" | "youtube";
    /**
     * Your video file. Required if `video_source` is `file`. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    video_file_path?: string;
    /**
     * YouTube URL (required if `video_source` is `youtube`).
     */
    youtube_url?: string;
    /**
     * Required for v3: an uploaded reference image path, or a completed image output owned by you. The caller supplies this image; the API does not generate it.
     */
    initial_image_path?: string;
  };
};

/**
 * Success
 */
export type V1VideoToVideoCreateResponse = {
  /**
   * Unique ID of the video. Use it with the [Get video Project API](https://docs.magichour.ai/api-reference/video-projects/get-video-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for video generation. Use 'credits_charged' instead.
   *
   * The amount of frames used to generate the video. If the status is not 'complete', the cost is an estimate and will be adjusted when the video completes.
   * @deprecated
   */
  estimated_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the video. If the status is not 'complete', this value is an estimate and may be adjusted upon completion based on the actual FPS of the output video.
   *
   * If video generation fails, credits will be refunded, and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1VideoToVideoCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1VideoToVideoCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1VideoToVideoCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1VideoToVideoCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1VideoToVideoCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1VideoToVideoCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1ImageProjectsGetParams = {
  /**
   * Unique ID of the image project. This value is returned by all of the POST APIs that create an image.
   */
  id: string;
};

/**
 * Success
 */
export type V1ImageProjectsGetResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * The name of the image.
   */
  name: (string) | null;
  /**
   * The status of the image.
   *
   * - `draft` - the project was created but has not been submitted for rendering
   * - `queued` - the job is waiting for an available server
   * - `rendering` - the job is being processed; the `image.started` webhook event fires when rendering begins
   * - `complete` - the job finished successfully; fires `image.completed`
   * - `error` - the job failed during processing; fires `image.errored`
   * - `canceled` - the job was manually canceled (for example from the Magic Hour web app)
   *
   * **Note:** `rendering`, `complete`, and `error` have matching webhook events; `canceled` does not - a canceled job emits no webhook event, so poll this endpoint to detect cancellation.
   */
  status: "draft" | "queued" | "rendering" | "complete" | "error" | "canceled";
  /**
   * Number of images generated
   */
  image_count: number;
  /**
   * The type of the image project. Possible values are FACE_EDITOR, AI_IMAGE_EDITOR, GENERATIVE_FILL, AI_SELFIE, AI_HEADSHOT, AI_INFLUENCER, AI_IMAGE, AI_MEME, CLOTHES_CHANGER, BACKGROUND_REMOVER, FACE_SWAP, IMAGE_UPSCALER, IMAGE_ENHANCER, AI_GIF, QR_CODE, PHOTO_EDITOR, PHOTO_COLORIZER, IMAGE_COLOR_GRADER, HEAD_SWAP, BODY_SWAP, STORYBOARD, IMAGE_EXPANDER
   */
  type: string;
  created_at: string;
  /**
   * Whether this resource is active. If false, it is deleted.
   */
  enabled: boolean;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  total_frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
  downloads: ({
    url: string;
    expires_at: string;
  })[];
  /**
   * In the case of an error, this object will contain the error encountered during video render
   */
  error: ({
    /**
     * Details on the reason why a failure happened.
     */
    message: string;
    /**
     * An error code to indicate why a failure happened.
     */
    code: string;
  }) | null;
};

/**
 * Invalid Request
 */
export type V1ImageProjectsGetResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1ImageProjectsGetResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1ImageProjectsGetResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1ImageProjectsGetResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1ImageProjectsGetResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1ImageProjectsDeleteParams = {
  /**
   * Unique ID of the image project. This value is returned by all of the POST APIs that create an image.
   */
  id: string;
};

/**
 * Invalid Request
 */
export type V1ImageProjectsDeleteResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1ImageProjectsDeleteResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1ImageProjectsDeleteResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1ImageProjectsDeleteResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1ImageProjectsDeleteResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiClothesChangerCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Provide the assets for clothes changer
   */
  assets: {
    /**
     * The image with the person. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    person_file_path: string;
    /**
     * The image of the outfit. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    garment_file_path: string;
    /**
     * Type of clothing item to swap. If not provided, swaps the entire outfit.
     * * `upper_body` - for shirts/jackets
     * * `lower_body` - for pants/skirts
     * * `dresses` - for entire outfit (deprecated, use `entire_outfit` instead)
     * * `entire_outfit` - for entire outfit
     */
    garment_type?: "entire_outfit" | "upper_body" | "lower_body" | "dresses";
  };
};

/**
 * Success
 */
export type V1AiClothesChangerCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiClothesChangerCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiClothesChangerCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiClothesChangerCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiClothesChangerCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiClothesChangerCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiClothesChangerCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiFaceEditorCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Provide the assets for face editor
   */
  assets: {
    /**
     * This is the image whose face will be edited. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
  };
  /**
   * Face editing parameters
   */
  style: {
    /**
     * Enhance face features
     */
    enhance_face?: boolean;
    /**
     * Eyebrow direction (-100 to 100), in increments of 5
     */
    eyebrow_direction?: number;
    /**
     * Horizontal eye gaze (-100 to 100), in increments of 5
     */
    eye_gaze_horizontal?: number;
    /**
     * Vertical eye gaze (-100 to 100), in increments of 5
     */
    eye_gaze_vertical?: number;
    /**
     * Eye open ratio (-100 to 100), in increments of 5
     */
    eye_open_ratio?: number;
    /**
     * Lip open ratio (-100 to 100), in increments of 5
     */
    lip_open_ratio?: number;
    /**
     * Head roll (-100 to 100), in increments of 5
     */
    head_roll?: number;
    /**
     * Mouth grim (-100 to 100), in increments of 5
     */
    mouth_grim?: number;
    /**
     * Mouth pout (-100 to 100), in increments of 5
     */
    mouth_pout?: number;
    /**
     * Mouth purse (-100 to 100), in increments of 5
     */
    mouth_purse?: number;
    /**
     * Mouth smile (-100 to 100), in increments of 5
     */
    mouth_smile?: number;
    /**
     * Horizontal mouth position (-100 to 100), in increments of 5
     */
    mouth_position_horizontal?: number;
    /**
     * Vertical mouth position (-100 to 100), in increments of 5
     */
    mouth_position_vertical?: number;
    /**
     * Head pitch (-100 to 100), in increments of 5
     */
    head_pitch?: number;
    /**
     * Head yaw (-100 to 100), in increments of 5
     */
    head_yaw?: number;
  };
};

/**
 * Success
 */
export type V1AiFaceEditorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiFaceEditorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiFaceEditorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiFaceEditorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiFaceEditorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiFaceEditorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiFaceEditorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiGifGeneratorCreateBody = {
  /**
   * Give your gif a custom name for easy identification.
   */
  name?: string;
  style: {
    /**
     * The prompt used for the GIF.
     */
    prompt: string;
  };
  /**
   * The output file format for the generated animation.
   */
  output_format?: "gif" | "mp4" | "webm";
};

/**
 * Success
 */
export type V1AiGifGeneratorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiGifGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiGifGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiGifGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiGifGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiGifGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiGifGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiImageEditorCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Number of images to generate. Maximum varies by model. Defaults to 1 if not specified.
   */
  image_count?: 1 | 4 | 9 | 16;
  /**
   * The AI model to use for image editing. Each model has different capabilities and costs.
   *
   * **Models:**
   * - `default` - Use the model we recommend, which will change over time. This is recommended unless you need a specific model. This is the default behavior.
   * - `flux-2-klein` - from 5 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Max additional input images: 5
   * - `gpt-image-2` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `gpt-image-2.5-flare` - from 100 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `krea-2` - from 10 credits/image
   *   - Supported resolutions: 640px, 1k
   *   - Available for tiers: free, creator, pro, business
   *   - Max additional input images: 1
   * - `nano-banana` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `nano-banana-2-lite` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `nano-banana-2.1` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `nano-banana-pro` - from 150 credits/image
   *   - Supported resolutions: 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `qwen-edit` - from 10 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Max additional input images: 2
   * - `qwen-image-2.1` - from 10 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Max additional input images: 2
   * - `seedream-v4` - from 40 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `seedream-v4.5` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `seedream-v5-flash` - from 30 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   * - `seedream-v5-pro` - from 75 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: creator, pro, business
   *   - Max additional input images: 9
   *
   */
  model?: "default" | "qwen-image-2.1" | "gpt-image-2" | "flux-2-klein" | "nano-banana-pro" | "seedream-v5-pro" | "seedream-v5-flash" | "seedream-v4.5" | "nano-banana-2.1" | "qwen-edit" | "nano-banana-2-lite" | "krea-2" | "gpt-image-2.5-flare" | "seedream-v4" | "nano-banana" | "nano-banana-2";
  /**
   * The aspect ratio of the output image(s). If not specified, defaults to `auto`. Ignored for `krea-2` and `flux-2-klein` when an input image is provided; the output keeps the source image's aspect ratio.
   */
  aspect_ratio?: "auto" | "16:9" | "9:16" | "4:3" | "3:2" | "1:1" | "4:5" | "2:3";
  /**
   * Maximum resolution (longest edge) for the output image.
   *
   * **Options:**
   * - `640px` — up to 640px
   * - `1k` — up to 1024px
   * - `2k` — up to 2048px
   * - `4k` — up to 4096px
   * - `auto` — **Deprecated.** Mapped server-side from your subscription tier to the best matching resolution the model supports
   *
   * **Per-model support:**
   * - `flux-2-klein` - 640px, 1k, 2k
   * - `gpt-image-2` - 640px, 1k, 2k, 4k
   * - `gpt-image-2.5-flare` - 640px, 1k, 2k, 4k
   * - `krea-2` - 640px, 1k
   * - `nano-banana` - 640px, 1k
   * - `nano-banana-2-lite` - 640px, 1k
   * - `nano-banana-2.1` - 640px, 1k, 2k, 4k
   * - `nano-banana-pro` - 1k, 2k, 4k
   * - `qwen-edit` - 640px, 1k, 2k
   * - `qwen-image-2.1` - 640px, 1k, 2k
   * - `seedream-v4` - 640px, 1k, 2k, 4k
   * - `seedream-v4.5` - 640px, 1k, 2k, 4k
   * - `seedream-v5-flash` - 640px, 1k, 2k
   * - `seedream-v5-pro` - 640px, 1k, 2k
   *
   * Note: Resolution availability depends on the model and your subscription tier.
   */
  resolution?: "auto" | "640px" | "1k" | "2k" | "4k";
  style: {
    /**
     * The prompt used to edit the image.
     */
    prompt: string;
    /**
     * Deprecated: Please use `model` instead. The AI model to use for image editing.
     * * `Nano Banana` - Precise, realistic edits with consistent results
     * * `Seedream` - Creative, imaginative images with artistic freedom
     * * `default` - Use the model we recommend, which will change over time. This is recommended unless you need a specific model. This is the default behavior.
     * @deprecated
     */
    model?: "Nano Banana" | "Seedream" | "default";
  };
  /**
   * Provide the assets for image edit
   */
  assets: {
    /**
     * Deprecated: Please use `image_file_paths` instead as edits with multiple images are now supported. The image used in the edit. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     * @deprecated
     */
    image_file_path?: string;
    /**
     * The image(s) used in the edit, maximum of 10 images. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_paths?: (string)[];
  };
};

/**
 * Success
 */
export type V1AiImageEditorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiImageEditorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiImageEditorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiImageEditorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiImageEditorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiImageEditorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiImageEditorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiHeadshotGeneratorCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  style?: {
    /**
     * Prompt used to guide the style of your headshot. We recommend omitting the prompt unless you want to customize your headshot. You can visit [AI headshot generator](https://magichour.ai/create/ai-headshot-generator) to view an example of a good prompt used for our 'Professional' style.
     */
    prompt?: string;
  };
  /**
   * Provide the assets for headshot photo
   */
  assets: {
    /**
     * The image used to generate the headshot. This image must contain one detectable face. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
  };
};

/**
 * Success
 */
export type V1AiHeadshotGeneratorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiHeadshotGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiHeadshotGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiHeadshotGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiHeadshotGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiHeadshotGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiHeadshotGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiImageGeneratorCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Number of images to generate. Maximum varies by model.
   */
  image_count: number;
  /**
   * The AI model to use for image generation. Each model has different capabilities and costs.
   *
   * **Models:**
   * - `default` - Use the model we recommend, which will change over time. This is recommended unless you need a specific model. This is the default behavior.
   * - `flux-2-klein` - from 5 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Image count allowed: 1
   * - `flux-schnell` - from 5 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `gpt-image-2` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `gpt-image-2.5-flare` - from 100 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `krea-2` - from 10 credits/image
   *   - Supported resolutions: 640px, 1k
   *   - Available for tiers: free, creator, pro, business
   *   - Image count allowed: 1
   * - `nano-banana` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `nano-banana-2-lite` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `nano-banana-2.1` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 4, 9, 16
   * - `nano-banana-pro` - from 150 credits/image
   *   - Supported resolutions: 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 4, 9, 16
   * - `qwen-image-2.1` - from 10 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `seedream-v4` - from 40 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `seedream-v4.5` - from 50 credits/image
   *   - Supported resolutions: 640px, 1k, 2k, 4k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `seedream-v5-flash` - from 30 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `seedream-v5-pro` - from 75 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   * - `z-image-turbo` - from 5 credits/image
   *   - Supported resolutions: 640px, 1k, 2k
   *   - Available for tiers: free, creator, pro, business
   *   - Image count allowed: 1, 2, 3, 4
   *
   * **Deprecated Enum Values:**
   * - `seedream` - Use `seedream-v4` instead.
   *
   */
  model?: "default" | "z-image-turbo" | "gpt-image-2" | "qwen-image-2.1" | "flux-2-klein" | "nano-banana-2.1" | "nano-banana-pro" | "krea-2" | "seedream-v5-pro" | "seedream-v5-flash" | "seedream-v4.5" | "nano-banana-2-lite" | "gpt-image-2.5-flare" | "seedream-v4" | "nano-banana" | "flux-schnell" | "seedream" | "nano-banana-2";
  /**
   * The aspect ratio of the output image(s). If not specified, defaults to `1:1` (square).
   */
  aspect_ratio?: "1:1" | "16:9" | "9:16";
  /**
   * Maximum resolution (longest edge) for the output image.
   *
   * **Options:**
   * - `640px` — up to 640px
   * - `1k` — up to 1024px
   * - `2k` — up to 2048px
   * - `4k` — up to 4096px
   * - `auto` — **Deprecated.** Mapped server-side from your subscription tier to the best matching resolution the model supports
   *
   * **Per-model support:**
   * - `flux-2-klein` - 640px, 1k, 2k
   * - `flux-schnell` - 640px, 1k, 2k
   * - `gpt-image-2` - 640px, 1k, 2k, 4k
   * - `gpt-image-2.5-flare` - 640px, 1k, 2k, 4k
   * - `krea-2` - 640px, 1k
   * - `nano-banana` - 640px, 1k
   * - `nano-banana-2-lite` - 640px, 1k
   * - `nano-banana-2.1` - 640px, 1k, 2k, 4k
   * - `nano-banana-pro` - 1k, 2k, 4k
   * - `qwen-image-2.1` - 640px, 1k, 2k
   * - `seedream-v4` - 640px, 1k, 2k, 4k
   * - `seedream-v4.5` - 640px, 1k, 2k, 4k
   * - `seedream-v5-flash` - 640px, 1k, 2k
   * - `seedream-v5-pro` - 640px, 1k, 2k
   * - `z-image-turbo` - 640px, 1k, 2k
   *
   * Note: Resolution availability depends on the model and your subscription tier.
   */
  resolution?: "auto" | "640px" | "1k" | "2k" | "4k";
  /**
   * DEPRECATED: Use `aspect_ratio` instead.
   *
   * The orientation of the output image(s). `aspect_ratio` takes precedence when `orientation` if both are provided.
   * @deprecated
   */
  orientation?: "square" | "landscape" | "portrait";
  /**
   * The art style to use for image generation.
   */
  style: {
    /**
     * The prompt used for the image(s).
     */
    prompt: string;
    /**
     * The art style to use for image generation. Defaults to 'general' if not provided.
     */
    tool?: "ai-anime-generator" | "ai-art-generator" | "ai-background-generator" | "ai-character-generator" | "ai-face-generator" | "ai-fashion-generator" | "ai-icon-generator" | "ai-illustration-generator" | "ai-interior-design-generator" | "ai-landscape-generator" | "ai-logo-generator" | "ai-manga-generator" | "ai-outfit-generator" | "ai-pattern-generator" | "ai-photo-generator" | "ai-sketch-generator" | "ai-tattoo-generator" | "album-cover-generator" | "animated-characters-generator" | "architecture-generator" | "book-cover-generator" | "comic-book-generator" | "dark-fantasy-ai" | "disney-ai-generator" | "dnd-ai-art-generator" | "emoji-generator" | "fantasy-map-generator" | "graffiti-generator" | "movie-poster-generator" | "optical-illusion-generator" | "pokemon-generator" | "south-park-character-generator" | "superhero-generator" | "thumbnail-maker" | "general";
    /**
     * DEPRECATED: Use `model` field instead for explicit model selection.
     *
     * Legacy quality mode mapping:
     * - `standard` → `z-image-turbo` model
     * - `pro` → `seedream-v4` model
     *
     * If model is specified, it will take precedence over the legacy quality_mode field.
     * @deprecated
     */
    quality_mode?: "standard" | "pro";
  };
};

/**
 * Success
 */
export type V1AiImageGeneratorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiImageGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiImageGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiImageGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiImageGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiImageGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiImageGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiImageUpscalerCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * How much to scale the image. Must be either 2 or 4.
   *
   * Note: 4x upscale is only available on Creator, Pro, or Business tier.
   */
  scale_factor: number;
  /**
   * Style settings for the upscale. Use `mode` (`"preserve"`, `"balanced"`, or `"creative"`). Defaults to `"balanced"`.
   */
  style?: {
    /**
     * The upscaling mode. `"preserve"` uses the fast pro pipeline (1× credit multiplier). `"balanced"` and `"creative"` use the creative pipeline (2× credit multiplier). `"pro"` is deprecated and maps to `"preserve"`. Defaults to `"balanced"`.
     */
    mode?: "pro" | "preserve" | "balanced" | "creative";
    /**
     * Deprecated: use `mode` instead. `"Resemblance"` maps to `"preserve"`. `"Balanced"` and `"Creative"` map to the same-named modes.
     * @deprecated
     */
    enhancement?: "Resemblance" | "Balanced" | "Creative";
    /**
     * A prompt to guide the final image. Only used when mode is `creative`.
     */
    prompt?: string;
  };
  /**
   * Provide the assets for upscaling
   */
  assets: {
    /**
     * The image to upscale. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     * . The maximum input image size is 4096x4096px.
     */
    image_file_path: string;
  };
};

/**
 * Success
 */
export type V1AiImageUpscalerCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiImageUpscalerCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiImageUpscalerCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiImageUpscalerCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiImageUpscalerCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiImageUpscalerCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiImageUpscalerCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiMemeGeneratorCreateBody = {
  /**
   * The name of the meme.
   */
  name?: string;
  style: {
    /**
     * The topic of the meme.
     */
    topic: string;
    /**
     * To use our templates, pass in one of the enum values.
     */
    template: "Random" | "Drake Hotline Bling" | "Galaxy Brain" | "Two Buttons" | "Gru's Plan" | "Tuxedo Winnie The Pooh" | "Is This a Pigeon" | "Panik Kalm Panik" | "Disappointed Guy" | "Waiting Skeleton" | "Bike Fall" | "Change My Mind" | "Side Eyeing Chloe" | "Woman Yelling at a Cat" | "Success Kid" | "One Does Not Simply" | "Bad Luck Brian" | "Futurama Fry" | "Ancient Aliens" | "Disaster Girl" | "Hide the Pain Harold" | "Distracted Boyfriend" | "Left Exit 12 Off Ramp" | "Running Away Balloon" | "Batman Slapping Robin" | "UNO Draw 25" | "Mocking SpongeBob" | "Boardroom Meeting Suggestion" | "X, X Everywhere" | "Buff Doge vs Cheems" | "Bernie Once Again Asking" | "Roll Safe Think About It" | "Blank Nut Button" | "Epic Handshake" | "Sad Pablo Escobar" | "Inhaling Seagull" | "Surprised Pikachu" | "Always Has Been" | "Scroll of Truth" | "Marked Safe From" | "Y'all Got Any More of That" | "Monkey Puppet" | "Oprah You Get A" | "They're the Same Picture" | "I Bet He's Thinking About Other Women" | "Evil Kermit" | "This Is Fine" | "This Is Where I'd Put My Trophy" | "Anakin Padme Four Panel" | "Who Killed Hannibal" | "Clown Applying Makeup" | "Trade Offer" | "Laughing Leo" | "Sleeping Shaq" | "Megamind Peeking" | "Grandma Finds the Internet" | "Doge" | "American Chopper Argument" | "First World Problems" | "Grumpy Cat" | "SpongeBob Ight Imma Head Out" | "But That's None of My Business" | "Creepy Condescending Wonka" | "Captain Picard Facepalm" | "Hard to Swallow Pills" | "Bell Curve" | "Absolute Cinema" | "You Guys Are Getting Paid" | "Types of Headaches" | "Mother Ignoring Kid Drowning in a Pool" | "Flex Tape" | "Spiderman Pointing at Spiderman" | "Charlie Conspiracy" | "Pawn Stars Best I Can Do" | "0 Days Without" | "Squidward Window" | "Where Monkey" | "Soldier Protecting Sleeping Child" | "They Don't Know" | "Spiderman Triple" | "Two Guys on a Bus" | "Imagination SpongeBob" | "All My Homies Hate" | "You Know I'm Something of a Scientist Myself" | "Anime Girl Hiding from Terminator" | "A Train Hitting a School Bus" | "AJ Styles and Undertaker" | "Three-Headed Dragon" | "Grant Gustin Over Grave" | "Whisper and Goosebumps" | "Scooby Doo Mask Reveal" | "Domino Effect" | "Two Paths" | "I'm the Captain Now" | "Say the Line Bart" | "Star Wars Yoda" | "Grim Reaper Knocking Door" | "Yo Dawg Heard You" | "Gus Fring We Are Not the Same" | "C'mon Do Something" | "Leonardo DiCaprio Cheers";
    /**
     * Whether to search the web for meme content.
     */
    searchWeb?: boolean;
  };
};

/**
 * Success
 */
export type V1AiMemeGeneratorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiMemeGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiMemeGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiMemeGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiMemeGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiMemeGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiMemeGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiQrCodeGeneratorCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * The content of the QR code.
   */
  content: string;
  style: {
    /**
     * To use our templates, pass in one of Watercolor, Cyberpunk City, Ink Landscape, Interior Painting, Japanese Street, Mech, Minecraft, Picasso Painting, Game Map, Spaceship, Chinese Painting, Winter Village, or pass any custom art style.
     */
    art_style: string;
  };
};

/**
 * Success
 */
export type V1AiQrCodeGeneratorCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiQrCodeGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiQrCodeGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiQrCodeGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiQrCodeGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiQrCodeGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiQrCodeGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1BodySwapCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Output resolution. Determines credits charged for the run.
   */
  resolution: "640px" | "1k" | "2k" | "4k";
  /**
   * Person image and scene image for body swap
   */
  assets: {
    /**
     * Image of the person to place into the scene. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    person_file_path: string;
    /**
     * Original scene image (background). This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    scene_file_path: string;
  };
};

/**
 * Success
 */
export type V1BodySwapCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1BodySwapCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1BodySwapCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1BodySwapCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1BodySwapCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1BodySwapCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1BodySwapCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1FaceSwapPhotoCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Provide the assets for face swap photo
   */
  assets: {
    /**
     * Choose how to swap faces:
     * - **all-faces** (recommended) — swap all detected faces using one source image (`source_file_path` required)
     * - **individual-faces** — specify exact mappings using `face_mappings`
     */
    face_swap_mode?: "all-faces" | "individual-faces";
    /**
     * This is the image from which the face is extracted. The value is required if `face_swap_mode` is `all-faces`.
     *
     * This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    source_file_path?: string;
    /**
     * This is the array of face mappings used for multiple face swap. The value is required if `face_swap_mode` is `individual-faces`.
     */
    face_mappings?: ({
      /**
       * The face detected from the image in `target_file_path`. The file name is in the format of `<face_frame>-<face_index>.png`. This value is corresponds to the response in the [face detection API](https://docs.magichour.ai/api-reference/files/get-face-detection-details).
       *
       * * The face_frame is the frame number of the face in the target image. For images, the frame number is always 0.
       * * The face_index is the index of the face in the target image, starting from 0 going left to right.
       */
      original_face: string;
      /**
       * The face image that will be used to replace the face in the `original_face`. This value is either
       * - a direct URL to the file. The URL path must end in a supported file extension.
       * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
       *
       * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
       *
       */
      new_face: string;
    })[];
    /**
     * This is the image where the face from the source image will be placed. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    target_file_path: string;
  };
};

/**
 * Success
 */
export type V1FaceSwapPhotoCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1FaceSwapPhotoCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1FaceSwapPhotoCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1FaceSwapPhotoCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1FaceSwapPhotoCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1FaceSwapPhotoCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1FaceSwapPhotoCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1HeadSwapCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Constrains the larger dimension (height or width) of the output. Omit to use the maximum allowed for your plan (capped at 2048px). Values above your plan maximum are clamped down to your plan's maximum.
   */
  max_resolution?: number;
  /**
   * Provide the body and head images for head swap
   */
  assets: {
    /**
     * Image that receives the swapped head. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    body_file_path: string;
    /**
     * Image of the head to place on the body. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    head_file_path: string;
  };
};

/**
 * Success
 */
export type V1HeadSwapCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1HeadSwapCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1HeadSwapCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1HeadSwapCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1HeadSwapCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1HeadSwapCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1HeadSwapCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1ImageBackgroundRemoverCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Provide the assets for background removal
   */
  assets: {
    /**
     * The image to remove the background. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
    /**
     * The image used as the new background for the image_file_path. This image will be resized to match the image in image_file_path. Please make sure the resolution between the images are similar.
     *
     * This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    background_image_file_path?: string;
  };
};

/**
 * Success
 */
export type V1ImageBackgroundRemoverCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1ImageBackgroundRemoverCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1ImageBackgroundRemoverCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1ImageBackgroundRemoverCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1ImageBackgroundRemoverCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1ImageBackgroundRemoverCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1ImageBackgroundRemoverCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1PhotoColorizerCreateBody = {
  /**
   * Give your image a custom name for easy identification.
   */
  name?: string;
  /**
   * Provide the assets for photo colorization
   */
  assets: {
    /**
     * The image used to generate the colorized image. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    image_file_path: string;
  };
};

/**
 * Success
 */
export type V1PhotoColorizerCreateResponse = {
  /**
   * Unique ID of the image. Use it with the [Get image Project API](https://docs.magichour.ai/api-reference/image-projects/get-image-details) to fetch status and downloads.
   */
  id: string;
  /**
   * Deprecated: Previously represented the number of frames (original name of our credit system) used for image generation. Use 'credits_charged' instead.
   * @deprecated
   */
  frame_cost: number;
  /**
   * The amount of credits deducted from your account to generate the image. We charge credits right when the request is made.
   *
   * If an error occurred while generating the image(s), credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1PhotoColorizerCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1PhotoColorizerCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1PhotoColorizerCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1PhotoColorizerCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1PhotoColorizerCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1PhotoColorizerCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1AudioProjectsGetParams = {
  /**
   * Unique ID of the audio project. This value is returned by all of the POST APIs that create an audio.
   */
  id: string;
};

/**
 * Success
 */
export type V1AudioProjectsGetResponse = {
  /**
   * Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads.
   */
  id: string;
  /**
   * The name of the audio.
   */
  name: (string) | null;
  /**
   * The status of the audio.
   *
   * - `draft` - the project was created but has not been submitted for rendering
   * - `queued` - the job is waiting for an available server
   * - `rendering` - the job is being processed; the `audio.started` webhook event fires when rendering begins
   * - `complete` - the job finished successfully; fires `audio.completed`
   * - `error` - the job failed during processing; fires `audio.errored`
   * - `canceled` - the job was manually canceled (for example from the Magic Hour web app)
   *
   * **Note:** `rendering`, `complete`, and `error` have matching webhook events; `canceled` does not - a canceled job emits no webhook event, so poll this endpoint to detect cancellation.
   */
  status: "draft" | "queued" | "rendering" | "complete" | "error" | "canceled";
  /**
   * The type of the audio project. Possible values are AUDIO_TRANSLATOR, VOICE_GENERATOR, VOICE_CHANGER, VOICE_CLONER, VIDEO_TO_AUDIO, MUSIC_GENERATOR, SOUND_EFFECT_GENERATOR
   */
  type: string;
  created_at: string;
  /**
   * Whether this resource is active. If false, it is deleted.
   */
  enabled: boolean;
  /**
   * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
   *
   * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
  downloads: ({
    url: string;
    expires_at: string;
  })[];
  /**
   * In the case of an error, this object will contain the error encountered during video render
   */
  error: ({
    /**
     * Details on the reason why a failure happened.
     */
    message: string;
    /**
     * An error code to indicate why a failure happened.
     */
    code: string;
  }) | null;
};

/**
 * Invalid Request
 */
export type V1AudioProjectsGetResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AudioProjectsGetResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AudioProjectsGetResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AudioProjectsGetResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AudioProjectsGetResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

export type V1AudioProjectsDeleteParams = {
  /**
   * Unique ID of the audio project. This value is returned by all of the POST APIs that create an audio.
   */
  id: string;
};

/**
 * Invalid Request
 */
export type V1AudioProjectsDeleteResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AudioProjectsDeleteResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AudioProjectsDeleteResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AudioProjectsDeleteResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AudioProjectsDeleteResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiMusicGeneratorCreateBody = {
  /**
   * Give your audio a custom name for easy identification.
   */
  name?: string;
  /**
   * Requested track duration in seconds, from 15 to 300. Determines credits charged.
   */
  duration: number;
  style: {
    /**
     * Describe the song, including genre, mood, and instruments.
     */
    prompt: string;
    /**
     * Generate music without vocals. When true, lyrics is ignored.
     */
    instrumental?: boolean;
    /**
     * Custom lyrics. Omit or leave blank for AI-generated lyrics when instrumental is false.
     */
    lyrics?: string;
  };
};

/**
 * Success
 */
export type V1AiMusicGeneratorCreateResponse = {
  /**
   * Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads.
   */
  id: string;
  /**
   * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
   *
   * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiMusicGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiMusicGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiMusicGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiMusicGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * 422
 */
export type V1AiMusicGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiMusicGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiVoiceClonerCreateBody = {
  /**
   * Give your audio a custom name for easy identification.
   */
  name?: string;
  /**
   * Provide the assets for voice cloning.
   */
  assets: {
    /**
     * The audio used to clone the voice. This value is either
     * - a direct URL to the file. The URL path must end in a supported file extension.
     * - `file_path` field from the response of the [upload urls API](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls).
     *
     * See the [file upload guide](https://docs.magichour.ai/api-reference/files/generate-asset-upload-urls#input-file) for details.
     *
     */
    audio_file_path: string;
  };
  style: {
    /**
     * Spoken language. Use a canonical lowercase language name, or auto to detect the language from the text. Defaults to auto.
     */
    language?: "auto" | "chinese" | "english" | "japanese" | "korean" | "german" | "french" | "spanish" | "italian" | "russian" | "portuguese" | "hindi" | "polish" | "arabic" | "dutch" | "hebrew" | "tagalog" | "thai" | "urdu" | "turkish" | "vietnamese" | "tamil" | "persian" | "ukrainian" | "bengali" | "indonesian" | "marathi" | "romanian" | "swahili" | "nepali" | "telugu" | "punjabi" | "gujarati" | "javanese" | "burmese" | "kannada" | "cantonese" | "uzbek" | "afrikaans" | "albanian" | "amharic" | "armenian" | "assamese" | "azerbaijani" | "basque" | "belarusian" | "bulgarian" | "catalan" | "cebuano" | "croatian" | "czech" | "danish" | "estonian" | "finnish" | "galician" | "georgian" | "greek" | "haitian creole" | "hungarian" | "icelandic" | "kazakh" | "konkani" | "lao" | "latvian" | "lithuanian" | "luxembourgish" | "macedonian" | "maithili" | "malagasy" | "malay" | "malayalam" | "mongolian" | "norwegian" | "odia" | "pashto" | "serbian" | "sindhi" | "sinhala" | "slovak" | "slovenian" | "swedish" | "welsh";
    /**
     * Speech speed multiplier, from 0.75 to 1.30 inclusive. Defaults to 1 (normal speed).
     */
    speed?: number;
    /**
     * Text used to generate speech from the cloned voice. The character limit is 5000 characters.
     */
    prompt: string;
  };
};

/**
 * Success
 */
export type V1AiVoiceClonerCreateResponse = {
  /**
   * Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads.
   */
  id: string;
  /**
   * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
   *
   * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiVoiceClonerCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiVoiceClonerCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiVoiceClonerCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiVoiceClonerCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiVoiceClonerCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiVoiceClonerCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Body
 */
export type V1AiVoiceGeneratorCreateBody = {
  /**
   * Give your audio a custom name for easy identification.
   */
  name?: string;
  /**
   * The content used to generate speech.
   */
  style: {
    /**
     * Text used to generate speech. The character limit is 5000 characters.
     */
    prompt: string;
    /**
     * The voice to use for the speech. Use the `id` of a voice returned by `GET /v1/voices`.
     */
    voice_name: "Elon Musk" | "Mark Zuckerberg" | "Joe Rogan" | "Barack Obama" | "Morgan Freeman" | "Kanye West" | "Donald Trump" | "Joe Biden" | "Kim Kardashian" | "Taylor Swift" | "James Earl Jones" | "Samuel L. Jackson" | "Jeff Goldblum" | "David Attenborough" | "Sean Connery" | "Cillian Murphy" | "Anne Hathaway" | "Julia Roberts" | "Natalie Portman" | "Steve Carell" | "Amy Poehler" | "Stephen Colbert" | "Jimmy Fallon" | "David Letterman" | "Alex Trebek" | "Katy Perry" | "Prince" | "Kevin Bacon" | "Tom Hiddleston" | "Adam Driver" | "Alan Rickman" | "Alexz Johnson" | "Ana Gasteyer" | "Andrew Rannells" | "Arden Cho" | "Bear Grylls" | "Ben McKenzie" | "Ben Stiller" | "Ben Whishaw" | "Billie Joe Armstrong" | "Bingbing Li" | "Booboo Stewart" | "Bradley Steven Perry" | "Bruno Mars" | "Caity Lotz" | "Cameron Boyce" | "Candice Accola" | "Carrie Underwood" | "Casey Affleck" | "Caterina Scorsone" | "Cedric the Entertainer" | "Chace Crawford" | "Chadwick Boseman" | "Charlie Day" | "Chris Hemsworth" | "Chris Martin" | "Christopher Mintz-Plasse" | "Dan Fogler" | "Dan Stevens" | "Daniel Dae Kim" | "Danielle Panabaker" | "Dave Bautista" | "David Schwimmer" | "Denis Leary" | "Derek Mears" | "Diego Luna" | "Donald Glover" | "Donnie Yen" | "Doutzen Kroes" | "Dr. Dre" | "Drake Bell" | "Elle Fanning" | "Ernie Hudson" | "Fergie" | "Forest Whitaker" | "Francia Raisa" | "Freddie Highmore" | "Gillian Jacobs" | "Gina Carano" | "Ginnifer Goodwin" | "Gordon Ramsay" | "Guy Pearce" | "Gwendoline Christie" | "Hailee Steinfeld" | "Howie Mandel" | "Hugh Jackman" | "Hugh Laurie" | "J. K. Simmons" | "Jack Black" | "Jared Leto" | "Jennifer Carpenter" | "Kesha" | "Kris Jenner" | "Kristen Bell" | "Lorde" | "Matt Smith" | "Marilyn Monroe" | "Charlie Chaplin" | "Albert Einstein" | "Abraham Lincoln" | "John F. Kennedy" | "Lucille Ball" | "A.R. Rahman" | "Aamir Khan" | "Ajay Devgn" | "Akshay Kumar" | "Alain Delon" | "Alan Alda" | "Alan Cumming" | "Amitabh Bachchan" | "Ang Lee" | "Ansel Elgort" | "Anthony Anderson" | "Anthony Mackie" | "Armie Hammer" | "Asa Butterfield" | "B.J. Novak" | "Barbara Eden" | "Betty White" | "Bill Nighy" | "Bill Pullman" | "Blake Shelton" | "Bonnie Wright" | "Brad Paisley" | "Brendan Gleeson" | "Brian Cox" | "Bruno Ganz" | "Burt Reynolds" | "Carrie Fisher" | "Charles Dance" | "Chiwetel Ejiofor" | "Chris Pine" | "Christina Hendricks" | "Christina Ricci" | "Dakota Fanning" | "Damian Lewis" | "Dan Aykroyd" | "Daniel Craig" | "David Oyelowo" | "David Tennant" | "Diane Keaton" | "Diane Kruger" | "Dick Van Dyke" | "Domhnall Gleeson" | "Dominic Cooper" | "Donald Sutherland" | "Drew Carey" | "Eartha Kitt" | "Eddie Izzard" | "Edward Asner" | "Eli Roth" | "Elisabeth Moss" | "Ellen Burstyn" | "Emile Hirsch" | "Ezra Miller" | "Felicity Jones" | "Fiona Shaw" | "Florence Henderson" | "Freida Pinto" | "Geena Davis" | "Gemma Arterton" | "Geri Halliwell" | "Glenn Close" | "Gloria Steinem" | "Greta Gerwig" | "Gugu Mbatha-Raw" | "Hans Zimmer" | "Harry Connick Jr." | "Harvey Keitel" | "Helena Bonham Carter" | "Henry Cavill" | "Hilary Swank" | "Hugh Bonneville" | "Idina Menzel" | "Imelda Staunton" | "Ingrid Bergman" | "Irrfan Khan" | "Isla Fisher" | "Iwan Rheon" | "Jack Lemmon" | "Janet Jackson" | "Jason Bateman" | "Jason Segel" | "Jennifer Coolidge" | "Johnny Galecki" | "Jon Favreau" | "Joseph Gordon-Levitt" | "Josh Brolin" | "Josh Gad" | "Josh Groban" | "Julia Louis-Dreyfus" | "Kristen Stewart" | "Kristen Wiig" | "Rooney Mara" | "Caitriona Balfe" | "J.J. Abrams" | "Zoe Saldana" | "SpongeBob SquarePants" | "Patrick Star" | "Squidward Tentacles" | "Homer Simpson" | "Bart Simpson" | "Peter Griffin" | "Stewie Griffin" | "Eric Cartman" | "Rick Sanchez" | "Bugs Bunny" | "Mickey Mouse" | "Donald Duck" | "Shrek" | "Donkey (Shrek)" | "Elsa (Frozen)" | "Woody (Toy Story)" | "Buzz Lightyear" | "Scooby-Doo" | "Shaggy Rogers" | "Bender (Futurama)" | "Optimus Prime" | "Batman (Animated)" | "The Joker (Animated)" | "Darth Vader" | "Yoda" | "Gollum Smeagol" | "Gandalf" | "Winnie the Pooh" | "Kermit the Frog" | "Elmo" | "SpiderMan (Tom Holland ver.)" | "Mario" | "Luigi" | "Sonic the Hedgehog" | "Naruto Uzumaki" | "Goku" | "Vegeta" | "Light Yagami" | "Luffy (One Piece)" | "Edward Elric" | "Eren Jaeger" | "Levi Ackerman" | "Tanjiro Kamado" | "All Might" | "GLaDOS" | "Master Chief" | "Kratos" | "Arthur Morgan" | "Geralt of Rivia" | "Dwayne 'The Rock' Johnson" | "LeBron James" | "Shaquille O'Neal" | "Conor McGregor" | "Mike Tyson" | "Kobe Bryant" | "Floyd Mayweather" | "Cristiano Ronaldo" | "Lionel Messi" | "Serena Williams" | "Tom Brady" | "Stephen Curry" | "John Cena" | "Hulk Hogan" | "Stone Cold Steve Austin" | "The Undertaker" | "Nate Diaz" | "Charles Barkley" | "Shannon Sharpe" | "Drake" | "Rihanna" | "Eminem" | "Snoop Dogg" | "Ed Sheeran" | "Billie Eilish" | "Ariana Grande" | "Post Malone" | "Travis Scott" | "Nicki Minaj" | "Cardi B" | "Doja Cat" | "Justin Bieber" | "Sabrina Carpenter" | "Chappell Roan" | "Dua Lipa" | "The Weeknd" | "Miley Cyrus" | "Lady Gaga" | "Kendrick Lamar" | "Ozzy Osbourne" | "Freddie Mercury" | "Elvis Presley" | "Bob Marley" | "Frank Sinatra" | "MrBeast" | "PewDiePie" | "Kai Cenat" | "IShowSpeed" | "Markiplier" | "Jacksepticeye" | "KSI" | "Logan Paul" | "Jake Paul" | "Dream (Minecraft)" | "Corpse Husband" | "xQc" | "Pokimane" | "Valkyrae" | "Ninja" | "Joe Scott" | "Linus (LTT)" | "Ryan Reynolds" | "Tom Hanks" | "Robert Downey Jr." | "Will Smith" | "Denzel Washington" | "Leonardo DiCaprio" | "Brad Pitt" | "Keanu Reeves" | "Nicolas Cage" | "Al Pacino" | "Robert De Niro" | "Arnold Schwarzenegger" | "Sylvester Stallone" | "Vin Diesel" | "Jason Statham" | "Tom Cruise" | "Johnny Depp" | "Scarlett Johansson" | "Angelina Jolie" | "Jennifer Aniston" | "Emma Watson" | "Margot Robbie" | "Sydney Sweeney" | "Zendaya" | "Timothee Chalamet" | "Pedro Pascal" | "Oscar Isaac" | "Benedict Cumberbatch" | "Ian McKellen" | "Patrick Stewart" | "Christopher Walken" | "Matthew McConaughey" | "Harrison Ford" | "Mark Wahlberg" | "Owen Wilson" | "Seth Rogen" | "Kevin Hart" | "Adam Sandler" | "Jim Carrey" | "Eddie Murphy" | "Robin Williams" | "Will Ferrell" | "Melissa McCarthy" | "Awkwafina" | "Jason Momoa" | "Idris Elba" | "Tom Hardy" | "Michael B. Jordan" | "Austin Butler" | "Glen Powell" | "Paul Giamatti" | "Bryan Cranston" | "Bob Odenkirk" | "Vladimir Putin" | "Queen Elizabeth II" | "Winston Churchill" | "Martin Luther King Jr." | "Kamala Harris" | "Bernie Sanders" | "Alexandria Ocasio-Cortez" | "Narendra Modi" | "Oprah Winfrey" | "Ellen DeGeneres" | "Dr. Phil" | "Steve Harvey" | "Trevor Noah" | "John Oliver" | "James Corden" | "Ryan Seacrest" | "Howard Stern" | "Conan O'Brien" | "Seth Meyers" | "Bill Nye" | "Neil deGrasse Tyson" | "Guy Fieri" | "Dave Chappelle" | "Chris Rock" | "Jerry Seinfeld" | "Ali Wong" | "John Mulaney" | "Hasan Minhaj" | "Nikki Glaser" | "Matt Rife" | "Gabriel Iglesias" | "Bo Burnham" | "Jeff Bezos" | "Bill Gates" | "Steve Jobs" | "Tim Cook" | "Sam Altman" | "Jensen Huang" | "Gilbert Gottfried" | "James May" | "Jeremy Clarkson" | "Richard Hammond" | "Bob Ross" | "Anthony Bourdain" | "David Goggins" | "Jordan Peterson" | "Joe Pesci" | "Danny DeVito" | "Seth MacFarlane" | "Patrick Warburton" | "Keith David" | "Mark Hamill" | "Liam Neeson" | "Antonio Banderas" | "Sofia Vergara" | "Penelope Cruz" | "Gal Gadot" | "Cate Blanchett" | "Viola Davis" | "Meryl Streep" | "Sandra Bullock" | "Reese Witherspoon" | "Salma Hayek" | "Lupita Nyong'o" | "Florence Pugh" | "Jenna Ortega" | "Ana de Armas" | "Jacob Elordi" | "Barry White" | "Dolly Parton" | "Willie Nelson" | "Lil Wayne" | "50 Cent" | "Ice Cube" | "Tupac Shakur" | "Notorious B.I.G." | "David Bowie" | "Michael Jackson" | "Whitney Houston" | "Amy Winehouse" | "SZA" | "Tyler, The Creator" | "Thanos" | "Tony Stark" | "Captain Jack Sparrow" | "Walter White" | "Tommy Shelby" | "Michael Scott" | "Dwight Schrute" | "Bowser" | "Usain Bolt" | "Tyson Fury" | "Dana White" | "Pat McAfee" | "Giannis Antetokounmpo" | "Lex Fridman" | "Ben Shapiro" | "Tucker Carlson" | "Martha Stewart" | "Gordon Lightfoot" | "Lizzo" | "Megan Thee Stallion" | "Ice Spice" | "21 Savage" | "Metro Boomin" | "Jack Harlow" | "Peso Pluma" | "BTS Jungkook" | "Quentin Tarantino" | "Werner Herzog" | "Anderson Cooper" | "Rachel Maddow" | "Mahatma Gandhi" | "Muhammad Ali" | "Princess Diana" | "Nelson Mandela" | "Steve Irwin" | "Morty Smith" | "Andrew Huberman" | "Willem Dafoe" | "Mike Rowe" | "Terminator" | "Deadpool" | "Plankton" | "Mr. Krabs" | "Picard" | "Ludwig" | "Emma Chamberlain" | "Casey Neistat" | "Marques Brownlee" | "Technoblade" | "Shroud" | "Charli D'Amelio" | "Khaby Lame" | "Adin Ross" | "Trainwreckstv" | "Hasan Piker" | "Joey Diaz" | "Theo Von" | "Andrew Schulz" | "Bert Kreischer" | "Tom Segura" | "Shane Gillis" | "Joe List" | "Bobby Lee" | "Chris Williamson" | "Destiny" | "Ethan Klein" | "Hila Klein" | "Olivia Rodrigo" | "Gracie Abrams" | "Benson Boone" | "Noah Kahan" | "Zach Bryan" | "Morgan Wallen" | "Luke Combs" | "Chris Stapleton" | "Rauw Alejandro" | "Karol G" | "Feid" | "J Balvin" | "Central Cee" | "Dave (rapper)" | "Stormzy" | "Gunna" | "Future" | "Lil Baby" | "Playboi Carti" | "Don Toliver" | "Lana Del Rey" | "Halsey" | "Charli XCX" | "Tate McRae" | "Conan Gray" | "Troye Sivan" | "Harry Styles" | "Niall Horan" | "Shawn Mendes" | "John Legend" | "Sam Smith" | "Roman Reigns" | "Cody Rhodes" | "Seth Rollins" | "CM Punk" | "Randy Orton" | "Triple H" | "Ric Flair" | "Khabib Nurmagomedov" | "Jon Jones" | "Israel Adesanya" | "Alex Pereira" | "Jorge Masvidal" | "Patrick Mahomes" | "Travis Kelce" | "Aaron Rodgers" | "Kyrie Irving" | "Kevin Durant" | "Nikola Jokic" | "Simone Biles" | "Novak Djokovic" | "Rafael Nadal" | "Roger Federer" | "Max Verstappen" | "Lewis Hamilton" | "Mark Rober" | "Naval Ravikant" | "Peter Attia" | "Gary Vaynerchuk" | "Alex Hormozi" | "Grant Cardone" | "JD Vance" | "Nancy Pelosi" | "Ron DeSantis" | "Volodymyr Zelenskyy" | "Xi Jinping" | "Justin Trudeau" | "Emmanuel Macron" | "Boris Johnson" | "Rishi Sunak" | "Keir Starmer" | "Tom Holland" | "Anya Taylor-Joy" | "Barry Keoghan" | "Paul Mescal" | "Rachel Zegler" | "Millie Bobby Brown" | "Finn Wolfhard" | "Noah Schnapp" | "Ke Huy Quan" | "Ayo Edebiri" | "Jeremy Allen White" | "Cloud Strife" | "Sephiroth" | "Solid Snake" | "Nathan Drake" | "Joel Miller" | "Ellie Williams" | "Duke Nukem" | "Lara Croft" | "Link (Zelda)" | "Samus Aran" | "Kirby" | "Pikachu" | "Ash Ketchum" | "Agent 47" | "Vergil (DMC)" | "Dante (DMC)" | "Ryu (Street Fighter)" | "Chun-Li" | "Scorpion (Mortal Kombat)" | "Sub-Zero" | "Steve (Minecraft)" | "Herobrine" | "Cortana" | "Aloy" | "Ezio Auditore" | "Altair" | "BJ Blazkowicz" | "Doom Slayer" | "Handsome Jack" | "Tracer (Overwatch)" | "Genji (Overwatch)" | "Reaper (Overwatch)" | "Jinx (Arcane)" | "Vi (Arcane)" | "Nezuko Kamado" | "Zenitsu Agatsuma" | "Gojo Satoru" | "Itadori Yuji" | "Denji (Chainsaw Man)" | "Power (Chainsaw Man)" | "Zoro (One Piece)" | "Nami (One Piece)" | "Sasuke Uchiha" | "Kakashi Hatake" | "Itachi Uchiha" | "Spike Spiegel" | "L (Death Note)" | "Saitama (One Punch Man)" | "Deku (My Hero Academia)" | "Bakugo Katsuki" | "Captain America (MCU)" | "Thor (MCU)" | "Loki (MCU)" | "Wolverine" | "Groot" | "Rocket Raccoon" | "Venom" | "The Mandalorian" | "Baby Yoda (Grogu)" | "Tony Montana (Scarface)" | "John Wick" | "James Bond (Craig era)" | "Ferris Bueller" | "Tyler Durden" | "The Dude (Big Lebowski)" | "Forrest Gump" | "Willy Wonka" | "Freddy Krueger" | "Jason Voorhees" | "Michael Myers" | "Pennywise" | "Hannibal Lecter" | "Family Guy Quagmire" | "Lois Griffin" | "Marge Simpson" | "Lisa Simpson" | "Ned Flanders" | "Krusty the Clown" | "Mr. Burns" | "Timmy Turner" | "Dexter (Dexter's Lab)" | "Johnny Bravo" | "Courage the Cowardly Dog" | "Finn the Human" | "Jake the Dog" | "Rick Grimes" | "Negan (Walking Dead)" | "Jesse Pinkman" | "Saul Goodman" | "Tony Soprano" | "Jim Halpert" | "Ron Swanson" | "Barney Stinson" | "Sheldon Cooper" | "Jon Snow" | "Tyrion Lannister" | "Daenerys Targaryen" | "Arya Stark" | "Homelander" | "Billy Butcher" | "Airrack" | "Zach King" | "Dude Perfect Tyler" | "Colleen Ballinger" | "David Dobrik" | "James Charles" | "NikkieTutorials" | "Jeffree Star" | "Danny Duncan" | "FaZe Rug" | "SSSniperWolf" | "Vegetta777" | "Rubius" | "Ibai Llanos" | "Fuerza Regida" | "Grupo Frontera" | "Bizarrap" | "Anitta" | "Rosalia" | "Maluma" | "Ozuna" | "Manuel Turizo" | "Camilo" | "Sam Fender" | "Hozier" | "Fred again" | "GloRilla" | "Sexyy Red" | "Flo Milli" | "Latto" | "Coi Leray" | "Ja Morant" | "Anthony Edwards" | "Victor Wembanyama" | "Caitlin Clark" | "Angel Reese" | "Sha'Carri Richardson" | "Erling Haaland" | "Kylian Mbappe" | "Jude Bellingham" | "Neymar" | "Vinicius Junior" | "Shohei Ohtani" | "Connor McDavid" | "Sidney Crosby" | "Steven Crowder" | "Candace Owens" | "Charlie Kirk" | "Matt Walsh" | "Tim Dillon" | "Whitney Cummings" | "Sam Harris" | "Malcolm Gladwell" | "Simon Sinek" | "Mel Robbins" | "Jocko Willink" | "Emma Stone" | "Ryan Gosling" | "Bradley Cooper" | "Christian Bale" | "Joaquin Phoenix" | "Mahershala Ali" | "Jamie Foxx" | "Regina King" | "Taraji P. Henson" | "Octavia Spencer" | "John Boyega" | "Daisy Ridley" | "Jonathan Majors" | "Simu Liu" | "Constance Wu" | "Henry Golding" | "Dev Patel" | "Riz Ahmed" | "Mindy Kaling" | "Aubrey Plaza" | "Aziz Ansari" | "Randall Park" | "Rainbow Dash" | "Twilight Sparkle" | "Gumball Watterson" | "Rigby (Regular Show)" | "Mordecai (Regular Show)" | "Steven Universe" | "Garnet (Steven Universe)" | "Aang (Avatar)" | "Zuko (Avatar)" | "Aretha Franklin" | "Stevie Wonder" | "Ray Charles" | "Johnny Cash" | "Janis Joplin" | "Kurt Cobain" | "Freddie Prinze" | "Selena Gomez" | "Justin Timberlake" | "Usher" | "Chris Brown" | "A$AP Rocky" | "RM (BTS)" | "V (BTS)" | "Jimin" | "Lisa (Blackpink)" | "Jennie (Blackpink)" | "Rose (Blackpink)" | "Calvin Harris" | "David Guetta" | "Marshmello" | "Skrillex" | "Diplo" | "Zedd" | "Jimmy Kimmel" | "Graham Norton" | "Bill Maher" | "Sean Hannity" | "Wolf Blitzer" | "Lester Holt" | "Satya Nadella" | "Sundar Pichai" | "Warren Buffett" | "Sheryl Sandberg" | "Marc Andreessen" | "Peter Thiel" | "Stephen Hawking" | "Carl Sagan" | "Richard Feynman" | "Jane Goodall" | "Franklin D. Roosevelt" | "Ronald Reagan" | "Margaret Thatcher" | "King Charles III" | "Prince Harry" | "Prince William" | "Stephen King" | "J.K. Rowling" | "George R.R. Martin" | "Neil Gaiman" | "Malcolm X" | "Jamie Oliver" | "Tiger Woods" | "Venus Williams" | "David Beckham" | "Michael Phelps" | "Peyton Manning" | "Virat Kohli" | "Sachin Tendulkar" | "MS Dhoni" | "The Rock" | "Rey Mysterio" | "Bray Wyatt" | "Kevin Owens" | "H3H3" | "Philip DeFranco" | "Jenna Marbles" | "Shane Dawson" | "Liza Koshy" | "Lilly Singh" | "Rhett and Link" | "Danny Gonzalez" | "Drew Gooden" | "Cody Ko" | "Kurtis Conner" | "Trisha Paytas" | "Tana Mongeau" | "Jaclyn Hill" | "Bretman Rock" | "Safiya Nygaard" | "Shah Rukh Khan" | "Salman Khan" | "Priyanka Chopra" | "Deepika Padukone" | "Jennifer Lawrence" | "Chris Evans" | "Daniel Radcliffe" | "Rupert Grint" | "Anthony Hopkins" | "Jack Nicholson" | "Clint Eastwood" | "Obi-Wan Kenobi" | "Luke Skywalker" | "Han Solo" | "Princess Leia" | "Emperor Palpatine" | "Kylo Ren" | "C-3PO" | "Frodo Baggins" | "Aragorn" | "Legolas" | "Samwise Gamgee" | "Harry Potter" | "Hermione Granger" | "Ron Weasley" | "Albus Dumbledore" | "Severus Snape" | "Voldemort" | "Hagrid" | "Belle (Beauty and the Beast)" | "Ariel (Little Mermaid)" | "Cinderella" | "Snow White" | "Mulan" | "Rapunzel (Tangled)" | "Fiona (Shrek)" | "Ross Geller" | "Chandler Bing" | "Joey Tribbiani" | "Monica Geller" | "Rachel Green" | "Phoebe Buffay" | "George Costanza" | "Kramer (Seinfeld)" | "Elaine Benes" | "Carlton Banks" | "Hinata Hyuga" | "Ichigo Kurosaki" | "Yoshi" | "Spyro" | "Ryu Hayabusa" | "Leon Kennedy" | "Chris Redfield" | "Jill Valentine" | "Ada Wong" | "Big Boss (MGS)" | "Raiden (MGS)" | "Commander Shepard" | "Garrus Vakarian" | "V (Cyberpunk)" | "Johnny Silverhand" | "Valorant Jett" | "League of Legends Ahri" | "Yasuo (LoL)" | "Superman" | "Wonder Woman" | "Harley Quinn" | "Black Panther" | "Doctor Strange" | "Hulk" | "Black Widow" | "Nick Fury" | "Ant-Man" | "Don Draper" | "Walter Bishop (Fringe)" | "Frank Underwood" | "Dexter Morgan" | "Sherlock Holmes" | "Dr. House" | "Michael Corleone" | "Vito Corleone" | "Daffy Duck" | "Porky Pig" | "Tweety Bird" | "Sylvester the Cat" | "Fred Flintstone" | "Barney Rubble" | "George Jetson" | "Popeye" | "Skip Bayless" | "Stephen A Smith" | "Colin Cowherd" | "Ricky Gervais" | "Bill Burr" | "Sebastian Maniscalco" | "Trevor Wallace" | "Iliza Shlesinger" | "Bruce Springsteen" | "Eric Clapton" | "Mick Jagger" | "Paul McCartney" | "John Lennon" | "Elton John" | "Billy Joel" | "Fleetwood Mac Stevie Nicks" | "Sia" | "Demi Lovato" | "Camila Cabello" | "Enrique Iglesias" | "Ricky Martin" | "Faze Clan Banks" | "Tfue" | "Timthetatman" | "DrLupo" | "CouRage" | "Sykkuno" | "Disguised Toast" | "Fuslie" | "Jerma985" | "Vinesauce Vinny" | "Northernlion" | "Moistcr1tikal" | "Asmongold" | "Mizkif" | "Esfand" | "Quin69" | "Summit1g" | "Sodapoppin" | "Forsen" | "Pestily" | "Joe Budden" | "Charlamagne Tha God" | "Angela Yee" | "Big Boy" | "Zane Lowe" | "Rich Eisen" | "Bill Simmons" | "Dan Le Batard" | "Slash (musician)" | "James Hetfield" | "Dave Grohl" | "Chris Cornell" | "Axl Rose" | "Robert Plant" | "Jon Bon Jovi" | "Chester Bennington" | "Corey Taylor" | "Fernando Alonso" | "Charles Leclerc" | "Daniel Ricciardo" | "Valentino Rossi" | "Marc Marquez" | "Travis Pastrana" | "Tony Hawk" | "Rohit Sharma" | "Babar Azam" | "Ben Stokes" | "Joe Root" | "Anthony Joshua" | "Canelo Alvarez" | "Ronda Rousey" | "Amanda Nunes" | "Bruce Willis" | "Chris Pratt" | "Charlize Theron" | "Nicole Kidman" | "Amy Adams" | "Jamie Lee Curtis" | "Gary Oldman" | "Mark Ruffalo" | "Jeremy Renner" | "Chris Tucker" | "Jonah Hill" | "Ranveer Singh" | "Alia Bhatt" | "Hrithik Roshan" | "Lee Min Ho" | "Song Joong Ki" | "Park Seo Joon" | "Kylie Jenner" | "Khloe Kardashian" | "Paris Hilton" | "Neil Armstrong" | "Buzz Aldrin" | "Yuri Gagarin" | "Killua Zoldyck" | "Gon Freecss" | "Meliodas" | "Natsu Dragneel" | "Lucy Heartfilia" | "Erza Scarlet" | "Inuyasha" | "Kagome Higurashi" | "Yusuke Urameshi" | "Vash the Stampede" | "Alucard (Hellsing)" | "Guts (Berserk)" | "Griffith (Berserk)" | "Reigen Arataka" | "Mob (Mob Psycho 100)" | "Anya Forger" | "Loid Forger" | "Yor Forger" | "Pit (Kid Icarus)" | "Marth (Fire Emblem)" | "Ike (Fire Emblem)" | "Sora (Kingdom Hearts)" | "Riku (Kingdom Hearts)" | "Sam Porter Bridges" | "Big Smoke (GTA)" | "CJ (GTA San Andreas)" | "Niko Bellic" | "Trevor Philips" | "Michael De Santa" | "Franklin Clinton" | "Marcus Fenix" | "Isaac Clarke" | "Ellie (Borderlands)" | "Lilith (Borderlands)" | "Claptrap" | "Widowmaker (Overwatch)" | "Mercy (Overwatch)" | "Reinhardt (Overwatch)" | "Phineas Flynn" | "Doofenshmirtz" | "Blossom (PPG)" | "Bubbles (PPG)" | "Buttercup (PPG)" | "Mojo Jojo" | "Ben Tennyson" | "Danny Phantom" | "Invader Zim" | "GIR (Invader Zim)" | "Sandy Cheeks" | "Ellen Ripley" | "Sarah Connor" | "Indiana Jones" | "Austin Powers" | "Inspector Clouseau" | "Gru (Despicable Me)" | "Alvin (Chipmunks)" | "Megatron" | "Chucky" | "Ghostface (Scream)" | "The Grinch" | "Jack Skellington" | "Jayson Tatum" | "Devin Booker" | "Damian Lillard" | "James Harden" | "Russell Westbrook" | "Joel Embiid" | "Justin Jefferson" | "Josh Allen" | "Joe Burrow" | "Micah Parsons" | "Myles Garrett" | "CeeDee Lamb" | "Burna Boy" | "Wizkid" | "Tems" | "Magnus Carlsen" | "Hikaru Nakamura" | "MrBallen" | "Ned Fulmer" | "Zach Kornfeld" | "Eugene Lee Yang" | "Alton Brown" | "Andrew Rea" | "Steve-O" | "Johnny Knoxville" | "Bam Margera" | "Russell Brand" | "Piers Morgan" | "Douglas Murray" | "Dave Rubin" | "Michael Knowles" | "Vivek Ramaswamy" | "Marjorie Taylor Greene" | "Mitch McConnell" | "Mike Pence" | "Hillary Clinton" | "Bill Clinton" | "George W Bush" | "George H W Bush" | "Jimmy Carter" | "Angela Merkel" | "Tara Strong" | "Tom Kenny" | "Nolan North" | "Troy Baker" | "Jennifer Hale" | "Steve Blum" | "Cersei Lannister" | "Jaime Lannister" | "Sansa Stark" | "Bran Stark" | "The Hound" | "Melisandre" | "Varys" | "Petyr Baelish" | "Ned Stark" | "Gus Fring" | "Mike Ehrmantraut" | "Hank Schrader" | "Skyler White" | "Joy (Inside Out)" | "Sadness (Inside Out)" | "Anger (Inside Out)" | "Mirabel (Encanto)" | "Bruno (Encanto)" | "Remy (Ratatouille)" | "Lightning McQueen" | "Mater (Cars)" | "Wreck-It Ralph" | "Vanellope von Schweetz" | "PointCrow" | "Ranboo" | "Wilbur Soot" | "Tubbo" | "GeorgeNotFound" | "Sapnap" | "Quackity" | "Karl Jacobs" | "Norman Bates" | "Anton Chigurh" | "Patrick Bateman" | "Travis Bickle" | "Rocky Balboa" | "Rambo" | "Maximus (Gladiator)" | "William Wallace" | "King Leonidas" | "Leslie Knope" | "Tom Haverford" | "April Ludgate" | "Andy Dwyer" | "Kevin Malone" | "Creed Bratton" | "Stanley Hudson" | "Toby Flenderson" | "Angela Martin" | "Summer Smith" | "Beth Smith" | "Jerry Smith" | "BoJack Horseman" | "Todd Chavez" | "Princess Carolyn" | "Diane Nguyen" | "Big Mouth Nick" | "Maury (Big Mouth)" | "Archer (Sterling)" | "Lana Kane" | "Malory Archer" | "Fry (Futurama)" | "Leela (Futurama)" | "Professor Farnsworth" | "Zapp Brannigan" | "Beavis" | "Butt-Head" | "King of the Hill Hank Hill" | "Bobby Hill" | "Dale Gribble" | "Stan Marsh" | "Kyle Broflovski" | "Randy Marsh" | "Towelie" | "Butters Stotch" | "Mr. Garrison" | "Chef (South Park)" | "Ike Broflovski" | "Wendy Testaburger" | "PC Principal" | "Jimmy Valmer" | "Michelle Obama" | "Al Gore" | "Desmond Tutu" | "Anthony Fauci" | "Greta Thunberg" | "Malala Yousafzai" | "Grimes" | "Jafar (Aladdin)" | "Ursula (Little Mermaid)" | "Iago (Aladdin parrot)" | "Zazu (Lion King)" | "Yzma (Emperor's New Groove)" | "Kronk (Emperor's New Groove)" | "Discord (My Little Pony)" | "Skeletor (He-Man)" | "Captain Hook (Peter Pan)" | "Sebastian (Little Mermaid)" | "HAL 9000" | "Mushu (Mulan)" | "Lumiere (Beauty and the Beast)" | "Cogsworth (Beauty and the Beast)" | "Scuttle (Little Mermaid)" | "Rafiki (Lion King)" | "Kristoff (Frozen)" | "Hans (Frozen)" | "Merlin (Sword in the Stone)" | "cv-0001" | "cv-0002" | "cv-0003" | "cv-0004" | "cv-0005" | "cv-0006" | "cv-0007" | "cv-0008" | "cv-0009" | "cv-0010" | "cv-0011" | "cv-0012" | "cv-0013" | "cv-0014" | "cv-0015" | "cv-0016" | "cv-0017" | "cv-0018" | "cv-0019" | "cv-0020" | "cv-0021" | "cv-0022" | "cv-0023" | "cv-0024" | "cv-0025" | "cv-0026" | "cv-0028" | "cv-0029" | "cv-0030" | "cv-0031" | "cv-0032" | "cv-0033" | "cv-0034" | "cv-0035" | "cv-0036" | "cv-0037" | "cv-0038" | "cv-0039" | "cv-0040" | "cv-0041" | "cv-0042" | "cv-0043" | "cv-0044" | "cv-0045" | "cv-0046" | "cv-0047" | "cv-0048" | "cv-0049" | "cv-0050" | "cv-0051" | "cv-0052" | "cv-0053" | "cv-0054" | "cv-0055" | "cv-0056" | "cv-0057" | "cv-0058" | "cv-0059" | "cv-0060" | "cv-0061" | "cv-0062" | "cv-0063" | "cv-0064" | "cv-0065" | "cv-0066" | "cv-0067" | "cv-0068" | "cv-0069" | "cv-0070" | "cv-0071" | "cv-0072" | "cv-0073" | "cv-0074" | "cv-0075" | "cv-0076" | "cv-0077" | "cv-0078" | "cv-0079" | "cv-0080" | "cv-0081" | "cv-0082" | "cv-0083" | "cv-0084" | "cv-0085" | "cv-0086" | "cv-0087" | "cv-0088" | "cv-0089" | "cv-0090" | "cv-0091" | "cv-0092" | "cv-0093" | "cv-0094" | "cv-0095" | "cv-0096" | "cv-0097" | "cv-0098" | "cv-0099" | "cv-0100" | "cv-0101" | "cv-0102" | "cv-0103" | "cv-0104" | "cv-0105" | "cv-0106" | "cv-0107" | "cv-0108" | "cv-0109" | "cv-0110" | "cv-0111" | "cv-0112" | "cv-0113" | "cv-0114" | "cv-0115" | "cv-0116" | "cv-0117" | "cv-0118" | "cv-0119" | "cv-0120" | "cv-0121" | "cv-0122" | "cv-0123" | "cv-0124" | "cv-0125" | "cv-0126" | "cv-0127" | "cv-0128" | "cv-0129" | "cv-0130" | "cv-0131" | "cv-0132" | "cv-0133" | "cv-0134" | "cv-0135" | "cv-0136" | "cv-0137" | "cv-0138" | "cv-0139" | "cv-0140" | "cv-0141" | "cv-0142" | "cv-0143" | "cv-0144" | "cv-0145" | "cv-0146" | "cv-0147" | "cv-0148" | "cv-0149" | "cv-0150" | "cv-0151" | "cv-0152" | "cv-0153" | "cv-0154" | "cv-0155" | "cv-0156" | "cv-0157" | "cv-0158" | "cv-0159" | "cv-0160" | "cv-0161" | "cv-0162" | "cv-0163" | "cv-0164" | "cv-0165" | "cv-0166" | "cv-0167" | "cv-0168" | "cv-0169" | "cv-0170" | "cv-0171" | "cv-0172" | "cv-0173" | "cv-0174" | "cv-0175" | "cv-0176" | "cv-0177" | "cv-0178" | "cv-0179" | "cv-0180" | "cv-0181" | "cv-0182" | "cv-0183" | "cv-0184" | "cv-0185" | "cv-0186" | "cv-0187" | "cv-0188" | "cv-0189" | "cv-0190" | "cv-0191" | "cv-0192" | "cv-0193" | "cv-0194" | "cv-0195" | "cv-0196" | "cv-0197" | "cv-0198" | "cv-0199" | "cv-0200" | "cv-0201" | "cv-0202" | "cv-0203" | "cv-0205" | "cv-0206" | "cv-0207" | "cv-0208" | "cv-0209" | "cv-0210" | "cv-0211" | "cv-0212" | "cv-0213" | "cv-0214" | "cv-0215" | "cv-0216" | "cv-0217" | "cv-0218" | "cv-0219" | "cv-0220" | "cv-0221" | "cv-0222" | "cv-0223" | "cv-0224" | "cv-0225" | "cv-0226" | "cv-0227" | "cv-0228" | "cv-0229" | "cv-0230" | "cv-0231" | "cv-0232" | "cv-0233" | "cv-0234" | "cv-0235" | "cv-0236" | "cv-0237" | "cv-0238" | "cv-0239" | "cv-0240" | "cv-0241" | "cv-0242" | "cv-0243" | "cv-0244" | "cv-0245" | "cv-0246" | "cv-0247" | "cv-0248" | "cv-0249" | "cv-0250" | "cv-0251" | "cv-0252" | "cv-0253" | "cv-0254" | "cv-0255" | "cv-0256" | "cv-0257" | "cv-0258" | "cv-0259" | "cv-0260" | "cv-0261" | "cv-0262" | "cv-0263" | "cv-0264" | "cv-0265" | "cv-0266" | "cv-0267" | "cv-0268" | "cv-0269" | "cv-0270" | "cv-0271" | "cv-0272" | "cv-0273" | "cv-0274" | "cv-0275" | "cv-0276" | "cv-0277" | "cv-0278" | "cv-0279" | "cv-0280" | "cv-0281" | "cv-0282" | "cv-0283" | "cv-0284" | "cv-0285" | "cv-0286" | "cv-0287" | "cv-0288" | "cv-0289" | "cv-0290" | "cv-0291" | "cv-0292" | "cv-0293" | "cv-0294" | "cv-0295" | "cv-0296" | "cv-0297" | "cv-0298" | "cv-0299" | "cv-0300" | "cv-0301" | "cv-0302" | "cv-0303" | "cv-0304" | "cv-0305" | "cv-0306" | "cv-0307" | "cv-0308" | "cv-0309" | "cv-0310" | "cv-0311" | "cv-0312" | "cv-0313" | "cv-0314" | "cv-0315" | "cv-0316" | "cv-0317" | "cv-0318" | "cv-0319" | "cv-0320" | "cv-0321" | "cv-0322" | "cv-0323" | "cv-0324" | "cv-0325" | "cv-0326" | "cv-0327" | "cv-0328" | "cv-0329" | "cv-0330" | "cv-0331" | "cv-0332" | "cv-0333" | "cv-0334" | "cv-0335" | "cv-0336" | "cv-0337" | "cv-0338" | "cv-0339" | "cv-0340" | "cv-0341" | "cv-0342" | "cv-0343" | "cv-0344" | "cv-0345" | "cv-0346" | "cv-0347" | "cv-0348" | "cv-0349" | "cv-0350" | "cv-0351" | "cv-0352" | "cv-0353" | "cv-0354" | "cv-0355" | "cv-0356" | "cv-0357" | "cv-0358" | "cv-0359" | "cv-0360" | "cv-0361" | "cv-0362" | "cv-0363" | "cv-0364" | "cv-0365" | "cv-0366" | "cv-0367" | "cv-0368" | "cv-0369" | "cv-0370" | "cv-0371" | "cv-0372" | "cv-0373" | "cv-0374" | "cv-0375" | "cv-0376" | "cv-0377" | "cv-0378" | "cv-0379" | "cv-0380" | "cv-0381" | "cv-0382" | "cv-0383" | "cv-0384" | "cv-0385" | "cv-0386" | "cv-0387" | "cv-0388" | "cv-0389" | "cv-0390" | "cv-0391" | "cv-0392" | "cv-0393" | "cv-0394" | "cv-0395" | "cv-0396" | "cv-0397" | "cv-0398" | "cv-0399" | "cv-0400" | "cv-0401" | "cv-0402" | "cv-0403" | "cv-0404" | "cv-0405" | "cv-0406" | "cv-0407" | "cv-0408" | "cv-0409" | "cv-0410" | "cv-0411" | "cv-0412" | "cv-0413" | "cv-0414" | "cv-0415" | "cv-0416" | "cv-0417" | "cv-0418" | "cv-0419" | "cv-0420" | "cv-0421" | "cv-0422" | "cv-0423" | "cv-0424" | "cv-0425" | "cv-0426" | "cv-0427" | "cv-0428" | "cv-0429" | "cv-0430" | "cv-0431" | "cv-0432" | "cv-0433" | "cv-0434" | "cv-0435" | "cv-0436" | "cv-0437" | "cv-0438" | "cv-0439" | "cv-0440" | "cv-0441" | "cv-0442" | "cv-0443" | "cv-0444" | "cv-0445" | "cv-0446" | "cv-0447" | "cv-0448" | "cv-0449" | "cv-0450" | "cv-0451" | "cv-0452" | "cv-0453" | "cv-0454" | "cv-0455" | "cv-0456" | "cv-0457" | "cv-0458" | "cv-0459" | "cv-0460" | "cv-0461" | "cv-0462" | "cv-0463" | "cv-0464" | "cv-0465" | "cv-0466" | "cv-0467" | "cv-0469" | "cv-0470" | "cv-0471" | "cv-0472" | "cv-0473" | "cv-0474" | "cv-0475" | "cv-0476" | "cv-0477" | "cv-0478" | "cv-0479" | "cv-0480" | "cv-0481" | "cv-0482" | "cv-0483" | "cv-0484" | "cv-0485" | "cv-0486" | "cv-0487" | "cv-0488" | "cv-0489";
    /**
     * Spoken language. Use a canonical lowercase language name, or auto to detect the language from the text. Defaults to auto.
     */
    language?: "auto" | "chinese" | "english" | "japanese" | "korean" | "german" | "french" | "spanish" | "italian" | "russian" | "portuguese" | "hindi" | "polish" | "arabic" | "dutch" | "hebrew" | "tagalog" | "thai" | "urdu" | "turkish" | "vietnamese" | "tamil" | "persian" | "ukrainian" | "bengali" | "indonesian" | "marathi" | "romanian" | "swahili" | "nepali" | "telugu" | "punjabi" | "gujarati" | "javanese" | "burmese" | "kannada" | "cantonese" | "uzbek" | "afrikaans" | "albanian" | "amharic" | "armenian" | "assamese" | "azerbaijani" | "basque" | "belarusian" | "bulgarian" | "catalan" | "cebuano" | "croatian" | "czech" | "danish" | "estonian" | "finnish" | "galician" | "georgian" | "greek" | "haitian creole" | "hungarian" | "icelandic" | "kazakh" | "konkani" | "lao" | "latvian" | "lithuanian" | "luxembourgish" | "macedonian" | "maithili" | "malagasy" | "malay" | "malayalam" | "mongolian" | "norwegian" | "odia" | "pashto" | "serbian" | "sindhi" | "sinhala" | "slovak" | "slovenian" | "swedish" | "welsh";
    /**
     * Speech speed multiplier, from 0.75 to 1.30 inclusive. Defaults to 1 (normal speed).
     */
    speed?: number;
  };
};

/**
 * Success
 */
export type V1AiVoiceGeneratorCreateResponse = {
  /**
   * Unique ID of the audio. Use it with the [Get audio Project API](https://docs.magichour.ai/api-reference/audio-projects/get-audio-details) to fetch status and downloads.
   */
  id: string;
  /**
   * The amount of credits deducted from your account to generate the audio. We charge credits right when the request is made.
   *
   * If an error occurred while generating the audio, credits will be refunded and this field will be updated to include the refund.
   */
  credits_charged: number;
};

/**
 * Invalid Request
 */
export type V1AiVoiceGeneratorCreateResponse400 = {
  /**
   * Machine-readable error code.
   *
   * - `invalid_request`: Fix request syntax or validation errors before retrying.
   */
  code: "invalid_request";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unauthorized
 */
export type V1AiVoiceGeneratorCreateResponse401 = {
  /**
   * Machine-readable error code.
   *
   * - `unauthorized`: Provide a valid API key before retrying.
   */
  code: "unauthorized";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Payment Required
 */
export type V1AiVoiceGeneratorCreateResponse402 = {
  /**
   * Machine-readable error code.
   *
   * - `insufficient_credits`: Purchase credits before retrying.
   *
   * - `subscription_required`: Start a subscription before retrying.
   *
   * - `plan_upgrade_required`: Upgrade the subscription plan before retrying.
   */
  code: "insufficient_credits" | "subscription_required" | "plan_upgrade_required";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Not Found
 */
export type V1AiVoiceGeneratorCreateResponse404 = {
  /**
   * Machine-readable error code.
   *
   * - `not_found`: Check the route or resource identifier.
   */
  code: "not_found";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Unprocessable Entity
 */
export type V1AiVoiceGeneratorCreateResponse422 = {
  /**
   * Machine-readable error code.
   *
   * - `unprocessable_entity`: Change the request values before retrying.
   */
  code: "unprocessable_entity";
  /**
   * Human-readable error message.
   */
  message: string;
};

/**
 * Internal Server Error
 */
export type V1AiVoiceGeneratorCreateResponse500 = {
  /**
   * Machine-readable error code.
   *
   * - `internal_server_error`: Retry later or contact support if the error continues.
   */
  code: "internal_server_error";
  /**
   * Human-readable error message.
   */
  message: string;
};
